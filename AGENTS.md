# BatteryTrail

Astro blog. Posts live in `src/content/posts/` as markdown files with frontmatter
(`title`, `slug`, `excerpt`, `featuredImage`, `author`, `publishedAt`, `status`,
`category`, `tags`, `featured`, `readTime`). The blog roll is generated automatically
from this directory — adding a post means adding one file, nothing else.

## Workflow preferences

- For blogroll/content work (adding or editing posts): just make the file change.
  Do NOT run builds, tests, or other verification steps — the user verifies the
  build themselves.
