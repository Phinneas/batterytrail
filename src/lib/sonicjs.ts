import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { marked } from 'marked';

const API_URL = import.meta.env.SONICJS_API_URL || process.env.SONICJS_API_URL || 'http://localhost:8787';
const API_TOKEN = import.meta.env.SONICJS_API_TOKEN || process.env.SONICJS_API_TOKEN || '';
const CACHE_DIR = join(process.cwd(), '.cache');
const CACHE_FILE = join(CACHE_DIR, 'sonicjs-posts.json');
const CACHE_TTL = 1000 * 60 * 60; // 1 hour
const FETCH_TIMEOUT = 15_000; // 15 seconds
const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'posts');

interface SonicJSResponse<T> {
  data: T;
  meta: {
    count: number;
    timestamp: string;
    cache: {
      hit: boolean;
      source: string;
    };
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    author: string;
    publishedAt: string;
    status: string;
    tags: string;
    category: string;
    readTime: string;
    featured: boolean;
  };
  created_at: number;
  updated_at: number;
}

function headers(): Record<string, string> {
  const h: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (API_TOKEN) {
    h['Authorization'] = `Bearer ${API_TOKEN}`;
  }
  return h;
}

async function fetchWithTimeout(url: string, opts: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
  try {
    const response = await fetch(url, { ...opts, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(timer);
  }
}

function readCache(): BlogPost[] | null {
  try {
    if (!existsSync(CACHE_FILE)) return null;
    const raw = JSON.parse(readFileSync(CACHE_FILE, 'utf-8'));
    if (Date.now() - raw.cachedAt > CACHE_TTL) return null;
    console.log(`[sonicjs] Using cached data (${raw.posts.length} posts, age: ${Math.round((Date.now() - raw.cachedAt) / 60000)}m)`);
    return raw.posts;
  } catch {
    return null;
  }
}

function writeCache(posts: BlogPost[]): void {
  try {
    if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(CACHE_FILE, JSON.stringify({ cachedAt: Date.now(), posts }));
    console.log(`[sonicjs] Cached ${posts.length} posts to ${CACHE_FILE}`);
  } catch (e) {
    console.warn(`[sonicjs] Cache write failed:`, e);
  }
}

let _allPosts: BlogPost[] | null = null;

async function fetchAllPosts(): Promise<BlogPost[]> {
  if (_allPosts) return _allPosts;

  // Try cache first
  const cached = readCache();
  if (cached) {
    const processed = processPostContent(cached);
    _allPosts = processed;
    return processed;
  }

  // Load local posts first
  const localPosts = loadLocalPosts();
  console.log(`[sonicjs] Loaded ${localPosts.length} local posts from ${CONTENT_DIR}`);

  // Fetch from API
  console.log(`[sonicjs] Fetching posts from ${API_URL}...`);
  let apiPosts: BlogPost[] = [];
  try {
    const response = await fetchWithTimeout(
      `${API_URL}/api/collections/blog-posts/content?filter[status][equals]=published&sort=-created_at`,
      { headers: headers() }
    );
    if (!response.ok) {
      console.warn(`[sonicjs] API returned ${response.status}, trying stale cache...`);
      const stale = readStaleCache();
      if (stale) {
        const processed = processPostContent(stale);
        apiPosts = processed;
      } else {
        console.warn(`[sonicjs] Using local posts only`);
      }
    } else {
      const result: SonicJSResponse<BlogPost[]> = await response.json();
      console.log(`[sonicjs] Fetched ${result.data.length} posts in ${result.meta?.cache ? 'cached' : 'live'} mode`);
      writeCache(result.data);
      apiPosts = processPostContent(result.data);
    }
  } catch (e: any) {
    if (e.name === 'AbortError') {
      console.warn(`[sonicjs] API fetch timed out after ${FETCH_TIMEOUT}ms, trying stale cache...`);
    } else {
      console.warn(`[sonicjs] API fetch failed:`, e.message);
    }
    const stale = readStaleCache();
    if (stale) {
      const processed = processPostContent(stale);
      apiPosts = processed;
    } else {
      console.warn(`[sonicjs] Using local posts only`);
    }
  }

  // Combine API posts and local posts
  // Give priority to API posts (CMS-managed), then add local posts that aren't in API
  const combined = [...apiPosts];
  localPosts.forEach(localPost => {
    if (!apiPosts.some(apiPost => apiPost.data.slug === localPost.data.slug)) {
      combined.push(localPost);
    }
  });

  _allPosts = combined;
  return combined;
}

/** Convert Markdown content to HTML. Posts already edited via the CMS UI
 *  arrive as HTML (<p>, <h1>…) — skip those to avoid double-processing. */
function processPostContent(posts: BlogPost[]): BlogPost[] {
  return posts.map(post => {
    const raw = post.data.content || '';
    const isAlreadyHtml = raw.trimStart().startsWith('<');
    return isAlreadyHtml
      ? post
      : {
          ...post,
          data: {
            ...post.data,
            content: marked(raw) as string,
          },
        };
  });
}

function readStaleCache(): BlogPost[] | null {
  try {
    if (!existsSync(CACHE_FILE)) return null;
    const raw = JSON.parse(readFileSync(CACHE_FILE, 'utf-8'));
    console.warn(`[sonicjs] Using stale cache (${raw.posts.length} posts, age: ${Math.round((Date.now() - raw.cachedAt) / 60000)}m)`);
    return raw.posts;
  } catch {
    return null;
  }
}

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\n([\s\S]*?)---/);
  if (!match) return {};
  
  const frontmatter = match[1];
  const result: Record<string, any> = {};
  
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const key = line.substring(0, colonIndex).trim();
    const value = line.substring(colonIndex + 1).trim();
    
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      result[key] = value.slice(1, -1);
    } else if (value === 'true') {
      result[key] = true;
    } else if (value === 'false') {
      result[key] = false;
    } else if (!isNaN(Number(value))) {
      result[key] = Number(value);
    } else {
      result[key] = value;
    }
  });
  
  return result;
}

/**
 * Load local markdown files from content directory
 */
function loadLocalPosts(): BlogPost[] {
  if (!existsSync(CONTENT_DIR)) {
    return [];
  }
  
  const files = readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
  const posts: BlogPost[] = [];
  
  files.forEach(file => {
    try {
      const filePath = join(CONTENT_DIR, file);
      const content = readFileSync(filePath, 'utf-8');
      const frontmatter = parseFrontmatter(content);
      
      // Extract markdown body (remove frontmatter)
      const body = content.replace(/^---\n[\s\S]*?---/, '');
      
      // Convert markdown to HTML
      const htmlContent = marked(body) as string;
      
      posts.push({
        id: file.replace('.md', ''),
        title: frontmatter.title || '',
        slug: frontmatter.slug || '',
        status: frontmatter.status || 'published',
        data: {
          title: frontmatter.title || '',
          slug: frontmatter.slug || '',
          excerpt: frontmatter.excerpt || '',
          content: htmlContent,
          featuredImage: frontmatter.featuredImage || '',
          author: frontmatter.author || '',
          publishedAt: frontmatter.publishedAt || '',
          status: frontmatter.status || 'published',
          tags: frontmatter.tags || '',
          category: frontmatter.category || '',
          readTime: frontmatter.readTime || '',
          featured: frontmatter.featured || false,
        },
        created_at: Date.now(),
        updated_at: Date.now(),
      });
    } catch (e) {
      console.warn(`[sonicjs] Failed to load local post ${file}:`, e);
    }
  });
  
  return posts;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return fetchAllPosts();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchAllPosts();
  return posts.find(p => p.data.slug === slug) || null;
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await fetchAllPosts();
  return posts.filter(p => p.data.featured);
}

export async function getRelatedPosts(post: BlogPost, limit = 3): Promise<BlogPost[]> {
  const posts = await fetchAllPosts();
  return posts
    .filter(p => p.id !== post.id && p.data.category === post.data.category)
    .slice(0, limit);
}

export function parseTags(tagsField: string): string[] {
  if (!tagsField) return [];
  return tagsField.split(',').map(t => t.trim()).filter(Boolean);
}
