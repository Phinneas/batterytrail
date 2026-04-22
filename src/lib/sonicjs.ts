const API_URL = import.meta.env.SONICJS_API_URL || 'http://localhost:8787';
const API_TOKEN = import.meta.env.SONICJS_API_TOKEN || '';

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

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(
    `${API_URL}/api/collections/blog-posts/content?filter[status][equals]=published&sort=-created_at`,
    { headers: headers() }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  const result: SonicJSResponse<BlogPost[]> = await response.json();
  return result.data;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await fetch(
    `${API_URL}/api/collections/blog-posts/content?filter[data.slug][equals]=${slug}&filter[status][equals]=published`,
    { headers: headers() }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }

  const result: SonicJSResponse<BlogPost[]> = await response.json();
  return result.data[0] || null;
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const response = await fetch(
    `${API_URL}/api/collections/blog-posts/content?filter[status][equals]=published&filter[data.featured][equals]=true&sort=-created_at&limit=1`,
    { headers: headers() }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch featured posts: ${response.statusText}`);
  }

  const result: SonicJSResponse<BlogPost[]> = await response.json();
  return result.data;
}

export async function getRelatedPosts(post: BlogPost, limit = 3): Promise<BlogPost[]> {
  const response = await fetch(
    `${API_URL}/api/collections/blog-posts/content?filter[status][equals]=published&filter[data.category][equals]=${post.data.category}&sort=-created_at&limit=${limit + 1}`,
    { headers: headers() }
  );

  if (!response.ok) {
    return [];
  }

  const result: SonicJSResponse<BlogPost[]> = await response.json();
  return result.data.filter((p) => p.id !== post.id).slice(0, limit);
}

export function parseTags(tagsField: string): string[] {
  if (!tagsField) return [];
  return tagsField.split(',').map(t => t.trim()).filter(Boolean);
}
