#!/usr/bin/env node
/**
 * ghost-to-mdx.mjs
 * Migrates a Ghost JSON export to Markdown files for the BatteryTrail Astro site.
 * Converts HTML content to proper Markdown using Turndown.
 * Usage: node scripts/ghost-to-mdx.mjs <path-to-ghost-export.json>
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import TurndownService from 'turndown';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../src/content/posts');
const REDIRECTS_FILE = path.join(__dirname, '../public/_redirects');
const IMAGES_DIR = path.join(__dirname, '../public/images/posts');

// Category classification — must match what's in the Header nav
const BATTERY_SLUGS = new Set([
  'battleborn-vs-renogy',
  'litime-vs-battle-born-batteries',
  'quietkat-vs-rad-power-battery',
  'trojan-t-105-vs-lithium-batteries',
  'lithium-battery-warranty-comparison-rv',
  'best-lifepo4-batteries',
  'rv-battery-voltage',
  'best-100ah-rv-batteries',
  '100ah-rv-battery',
  'which-is-best-for-your-rv-the-renology-or-goal-zero-rv-batteries',
]);

// Duplicate posts — key is the inferior slug, value is the superior slug to keep
const DUPLICATE_REDIRECTS = {
  'e-bike-battery-connector-types': 'ebike-battery-connector-types',
  'how-to-connect-two-12v-rv-batteries': 'connect-two-12v-rv-batteries',
  'rv-battery-bank-sizing-calculator-guide': 'rv-battery-bank-sizing-calculator',
  'wire-multiple-rv-batteries-series-parallel-guide': 'wire-multiple-rv-batteries',
};

// Turndown configuration
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
  strongDelimiter: '**',
  hr: '---',
});

// Custom rules for better Ghost HTML conversion
turndownService.addRule('table', {
  filter: 'table',
  replacement: function (content, node) {
    // Keep tables as raw HTML since Markdown tables are limited
    return '\n\n' + node.outerHTML + '\n\n';
  },
});

turndownService.addRule('iframe', {
  filter: 'iframe',
  replacement: function (content, node) {
    const src = node.getAttribute('src') || '';
    const title = node.getAttribute('title') || '';
    const width = node.getAttribute('width') || '100%';
    const height = node.getAttribute('height') || '450';
    return `\n\n<iframe src="${src}" title="${title}" width="${width}" height="${height}" frameborder="0" allowfullscreen loading="lazy"></iframe>\n\n`;
  },
});

function categorize(slug) {
  if (BATTERY_SLUGS.has(slug)) return 'Battery';
  const s = slug.toLowerCase();
  const hasRv = s.includes('rv') || s.includes('motorhome') || s.includes('boondocking');
  const hasEbike = s.includes('ebike') || s.includes('e-bike') || s.includes('electric-bike');
  if (hasEbike && hasRv) return 'RV';
  if (hasEbike) return 'Ebike';
  if (hasRv) return 'RV';
  return 'Battery';
}

function wordCount(text) {
  return (text || '').split(/\s+/).filter(Boolean).length;
}

function readTime(html) {
  const plain = html.replace(/<[^>]+>/g, ' ');
  const wc = wordCount(plain);
  return `${Math.ceil(wc / 200)} min read`;
}

function cleanHtml(html) {
  if (!html) return '';
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  // Remove Ghost card markers
  html = html.replace(/<!--kg-card-begin:[^>]*-->/gi, '');
  html = html.replace(/<!--kg-card-end:[^>]*-->/gi, '');
  // Remove empty h1 tags (title is in frontmatter)
  html = html.replace(/<h1[^>]*>\s*<\/h1>/gi, '');
  // Remove empty paragraphs
  html = html.replace(/<p>\s*<\/p>/gi, '');
  return html.trim();
}

function htmlToMarkdown(html) {
  const cleaned = cleanHtml(html);
  if (!cleaned) return '';
  const md = turndownService.turndown(cleaned);
  // Clean up excessive blank lines
  return md.replace(/\n{3,}/g, '\n\n').trim();
}

function generateDescription(html, customExcerpt) {
  if (customExcerpt && customExcerpt.trim()) return customExcerpt.trim();
  const plain = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return plain.slice(0, 160).replace(/\s\S*$/, '').trim() + '...';
}

function extractTags(post) {
  const tags = (post.tags || [])
    .map(t => t.name)
    .filter(n => n !== 'Hash' && n !== 'navitem' && !n.startsWith('#'));
  return [...new Set(tags)];
}

function yamlStr(val) {
  if (!val) return '""';
  return `"${val.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function buildFrontmatter(post, category) {
  const pubDate = new Date(post.published_at).toISOString().split('T')[0];
  const html = post.html || '';
  const description = generateDescription(html, post.custom_excerpt);
  const image = post.feature_image || '/images/default-featured.jpg';
  const rt = readTime(html);
  const featured = post.featured ? 'true' : 'false';
  const tags = extractTags(post);
  const tagsYaml = tags.length > 0
    ? `\n  - ${tags.join('\n  - ')}`
    : '[]';

  return `---
title: ${yamlStr(post.title)}
description: ${yamlStr(description)}
pubDate: ${pubDate}
author: ${yamlStr(post.primary_author?.name || 'BatteryTrail')}
image: ${yamlStr(image)}
category: ${yamlStr(category)}
readTime: ${yamlStr(rt)}
featured: ${featured}
tags:${tags.length > 0 ? tagsYaml : ' []'}
ghostSlug: ${yamlStr(post.slug)}
ghostId: ${yamlStr(post.id)}
---`;
}

function processPost(post) {
  const category = categorize(post.slug);
  const frontmatter = buildFrontmatter(post, category);
  const markdown = htmlToMarkdown(post.html || '');
  return `${frontmatter}\n\n${markdown}\n`;
}

// --- Main ---

const exportPath = process.argv[2];
if (!exportPath) {
  console.error('Usage: node scripts/ghost-to-mdx.mjs <path-to-ghost-export.json>');
  process.exit(1);
}

const raw = fs.readFileSync(exportPath, 'utf-8');
const data = JSON.parse(raw);
const db = data.db[0].data;

// Build a tags lookup from posts_tags and tags
const tagsById = {};
if (db.tags) {
  for (const tag of db.tags) {
    tagsById[tag.id] = tag;
  }
}
const postsTagsLookup = {}; // postId -> [{id, name}]
if (db.posts_tags) {
  for (const pt of db.posts_tags) {
    if (!postsTagsLookup[pt.post_id]) postsTagsLookup[pt.post_id] = [];
    if (tagsById[pt.tag_id]) {
      postsTagsLookup[pt.post_id].push(tagsById[pt.tag_id]);
    }
  }
}

const posts = db.posts.filter(
  (p) => p.type === 'post' && p.status === 'published'
);

// Attach tags to each post object
for (const post of posts) {
  post.tags = postsTagsLookup[post.id] || [];
}

console.log(`Found ${posts.length} published posts`);

// Clear existing posts
if (fs.existsSync(OUTPUT_DIR)) {
  const existing = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  for (const f of existing) {
    fs.unlinkSync(path.join(OUTPUT_DIR, f));
    console.log(`  Removed existing: ${f}`);
  }
} else {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Write redirects file
fs.mkdirSync(path.join(__dirname, '../public'), { recursive: true });
const redirectLines = [];

let written = 0;
let skipped = 0;
let errors = 0;

for (const post of posts) {
  try {
    // Skip duplicate inferior posts
    if (DUPLICATE_REDIRECTS[post.slug]) {
      skipped++;
      console.log(`  ⊘ ${post.slug} → redirected to ${DUPLICATE_REDIRECTS[post.slug]}`);
      // Add redirect for this duplicate
      redirectLines.push(`/${post.slug}/ /posts/${DUPLICATE_REDIRECTS[post.slug]} 301`);
      redirectLines.push(`/${post.slug} /posts/${DUPLICATE_REDIRECTS[post.slug]} 301`);
      continue;
    }

    const content = processPost(post);
    const filename = `${post.slug}.md`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), content, 'utf-8');

    // Ghost typically serves posts at /<slug>/
    redirectLines.push(`/${post.slug}/ /posts/${post.slug} 301`);
    redirectLines.push(`/${post.slug} /posts/${post.slug} 301`);

    written++;
    console.log(`  ✓ ${post.slug} [${categorize(post.slug)}]`);
  } catch (err) {
    errors++;
    console.error(`  ✗ ${post.slug}: ${err.message}`);
  }
}

// Write _redirects
fs.writeFileSync(REDIRECTS_FILE, redirectLines.join('\n') + '\n', 'utf-8');

console.log(`\nDone: ${written} posts written, ${skipped} duplicates skipped (redirected), ${errors} errors`);
console.log(`Redirects written to public/_redirects`);
