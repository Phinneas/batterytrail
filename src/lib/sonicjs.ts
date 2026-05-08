import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const API_URL = import.meta.env.SONICJS_API_URL || process.env.SONICJS_API_URL || 'http://localhost:8787';
const API_TOKEN = import.meta.env.SONICJS_API_TOKEN || process.env.SONICJS_API_TOKEN || '';
const CACHE_DIR = join(process.cwd(), '.cache');
const CACHE_FILE = join(CACHE_DIR, 'sonicjs-posts.json');
const CACHE_TTL = 1000 * 60 * 60; // 1 hour
const FETCH_TIMEOUT = 15_000; // 15 seconds

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
  if (cached) { _allPosts = cached; return cached; }

  // Fetch from API
  console.log(`[sonicjs] Fetching posts from ${API_URL}...`);
  try {
    const response = await fetchWithTimeout(
      `${API_URL}/api/collections/blog-posts/content?filter[status][equals]=published&sort=-created_at`,
      { headers: headers() }
    );
    if (!response.ok) {
      console.warn(`[sonicjs] API returned ${response.status}, trying stale cache...`);
      const stale = readStaleCache();
      if (stale) { _allPosts = stale; return stale; }
      throw new Error(`SonicJS API returned ${response.status}`);
    }
    const result: SonicJSResponse<BlogPost[]> = await response.json();
    console.log(`[sonicjs] Fetched ${result.data.length} posts in ${result.meta?.cache ? 'cached' : 'live'} mode`);
    writeCache(result.data);
    _allPosts = result.data;
    return result.data;
  } catch (e: any) {
    if (e.name === 'AbortError') {
      console.warn(`[sonicjs] API fetch timed out after ${FETCH_TIMEOUT}ms, trying stale cache...`);
    } else {
      console.warn(`[sonicjs] API fetch failed:`, e.message);
    }
    const stale = readStaleCache();
    if (stale) { _allPosts = stale; return stale; }
    throw new Error(`SonicJS API unreachable and no cache available. Set SONICJS_API_URL or check your connection.`);
  }
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
