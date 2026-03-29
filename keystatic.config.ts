import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
          slug: { label: 'Slug', description: 'URL-friendly identifier (auto-generated from title)' },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          description: 'Short summary shown in cards and meta tags (aim for ~160 chars)',
        }),
        pubDate: fields.date({
          label: 'Publish Date',
          defaultValue: { kind: 'today' },
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'BatteryTrail',
        }),
        image: fields.url({
          label: 'Feature Image URL',
          description: 'Full URL to the feature image (Unsplash, CDN, etc.)',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'RV', value: 'RV' },
            { label: 'Ebike', value: 'Ebike' },
            { label: 'Battery', value: 'Battery' },
          ],
          defaultValue: 'RV',
        }),
        readTime: fields.text({
          label: 'Read Time',
          description: 'e.g. "5 min read"',
          defaultValue: '5 min read',
        }),
        featured: fields.checkbox({
          label: 'Featured',
          description: 'Show this post prominently on the homepage',
          defaultValue: false,
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: (props) => props.fields.value.value || 'Tag',
          }
        ),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});
