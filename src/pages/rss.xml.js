import rss from '@astrojs/rss';
import { getBlogPosts, parseTags } from '../lib/sonicjs';

export async function GET(context) {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.publishedAt).valueOf() - new Date(a.data.publishedAt).valueOf()
  );

  return rss({
    title: 'BatteryTrail',
    description: 'Expert guides on RV batteries, ebike batteries, and off-grid power systems.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.excerpt,
      link: `/posts/${post.data.slug}/`,
      categories: [post.data.category, ...parseTags(post.data.tags)],
    })),
    customData: `<language>en-us</language>`,
  });
}
