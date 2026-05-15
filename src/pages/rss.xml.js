import rss from '@astrojs/rss';
import { getBlogPosts, parseTags } from '../lib/sonicjs';

export async function GET(context) {
  const posts = await getBlogPosts();
  function safeDate(post) {
    const d = new Date(post.data.publishedAt);
    return isNaN(d.getTime()) ? new Date(post.created_at) : d;
  }

  const sortedPosts = posts.sort((a, b) => safeDate(b).valueOf() - safeDate(a).valueOf());

  return rss({
    title: 'BatteryTrail',
    description: 'Expert guides on RV batteries, ebike batteries, and off-grid power systems.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: safeDate(post),
      description: post.data.excerpt,
      link: `/posts/${post.data.slug}/`,
      categories: [post.data.category, ...parseTags(post.data.tags)].filter(Boolean),
    })),
    customData: `<language>en-us</language>`,
  });
}
