import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { marked } from 'marked';

const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'posts');

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  data: {
    title: string;
    headline?: string;
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

/** Normalize a post so downstream consumers never render broken values:
 *  - fill in an empty/invalid `publishedAt` from the post's own timestamps
 *  - default `featured` to false when the field is missing
 */
function normalizePost(post: BlogPost): BlogPost {
  const data = { ...post.data };

  const rawDate = data.publishedAt;
  if (!rawDate || isNaN(new Date(rawDate).getTime())) {
    const fallback = post.created_at || post.updated_at || Date.now();
    data.publishedAt = new Date(fallback).toISOString();
  }

  if (typeof data.featured !== 'boolean') {
    data.featured = false;
  }

  return { ...post, data };
}

/** Convert Markdown content to HTML. Posts that already arrive as HTML
 *  (<p>, <h1>…) are left untouched to avoid double-processing. */
function processPostContent(posts: BlogPost[]): BlogPost[] {
  return posts.map((post) => {
    const normalized = normalizePost(post);
    const raw = normalized.data.content || '';
    const isAlreadyHtml = raw.trimStart().startsWith('<');
    return isAlreadyHtml
      ? normalized
      : {
          ...normalized,
          data: {
            ...normalized.data,
            content: marked(raw) as string,
          },
        };
  });
}

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\n([\s\S]*?)---/);
  if (!match) return {};

  const frontmatter = match[1];
  const result: Record<string, any> = {};

  frontmatter.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    const key = line.substring(0, colonIndex).trim();
    const value = line.substring(colonIndex + 1).trim();

    // Remove quotes if present
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
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
 * Load local markdown files from the content directory.
 */
function loadLocalPosts(): BlogPost[] {
  if (!existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  const posts: BlogPost[] = [];

  files.forEach((file) => {
    try {
      const filePath = join(CONTENT_DIR, file);
      const content = readFileSync(filePath, 'utf-8');
      const frontmatter = parseFrontmatter(content);

      // Extract markdown body (remove frontmatter)
      const body = content.replace(/^---\n[\s\S]*?---/, '');

      // Convert markdown to HTML
      const htmlContent = marked(body) as string;

      const slug = frontmatter.slug || file.replace('.md', '');

      posts.push({
        id: file.replace('.md', ''),
        title: frontmatter.title || '',
        slug,
        status: frontmatter.status || 'published',
        data: {
          title: frontmatter.title || '',
          headline: frontmatter.headline || '',
          slug,
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
      console.warn(`[posts] Failed to load local post ${file}:`, e);
    }
  });

  return posts;
}

let _allPosts: BlogPost[] | null = null;

async function fetchAllPosts(): Promise<BlogPost[]> {
  if (_allPosts) return _allPosts;
  const posts = processPostContent(loadLocalPosts());
  _allPosts = posts;
  return posts;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return fetchAllPosts();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchAllPosts();
  return posts.find((p) => p.data.slug === slug) || null;
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await fetchAllPosts();
  return posts.filter((p) => p.data.featured);
}

export async function getRelatedPosts(
  post: BlogPost,
  limit = 3,
): Promise<BlogPost[]> {
  const posts = await fetchAllPosts();
  return posts
    .filter((p) => p.id !== post.id && p.data.category === post.data.category)
    .slice(0, limit);
}

export function parseTags(tagsField: string): string[] {
  if (!tagsField) return [];
  return tagsField.split(',').map((t) => t.trim()).filter(Boolean);
}

/**
 * Parse a publishedAt value for display.
 *
 * `new Date("2026-06-16")` is interpreted as UTC midnight, so formatting it in
 * a negative-offset timezone (e.g. US Pacific) shifts the visible date back a
 * day ("Jun 15" instead of "Jun 16"). Date-only frontmatter values are parsed
 * as local midnight instead, which preserves the intended date everywhere.
 */
export function parsePublishDate(dateStr: string): Date {
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return new Date(`${dateStr}T00:00:00`);
  }
  return new Date(dateStr);
}
