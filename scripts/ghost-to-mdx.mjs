#!/usr/bin/env node
/**
 * ghost-to-mdx.mjs
 * Migrates a Ghost JSON export to MDX files for the BatteryTrail Astro site.
 * Usage: node scripts/ghost-to-mdx.mjs <path-to-ghost-export.json>
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../src/content/posts');
const REDIRECTS_FILE = path.join(__dirname, '../public/_redirects');

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

function categorize(slug) {
  if (BATTERY_SLUGS.has(slug)) return 'Battery';
  const s = slug.toLowerCase();
  const hasRv = s.includes('rv') || s.includes('motorhome') || s.includes('boondocking');
  const hasEbike = s.includes('ebike') || s.includes('e-bike') || s.includes('electric-bike');
  if (hasEbike && hasRv) return 'RV'; // RV wins conflicts
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
  html = html.replace(/<br\s*>/gi, '<br />');
  html = html.replace(/<hr\s*>/gi, '<hr />');
  html = html.replace(/<img(\s[^>]*?)?(?<!\/)>/gi, (match, attrs) => `<img${attrs || ''} />`);
  html = html.replace(/<h1[^>]*>\s*<\/h1>/gi, '');
  html = html.replace(/<p>\s*<\/p>/gi, '');
  html = html.replace(/<!--kg-card-begin:[^>]*-->/gi, '');
  html = html.replace(/<!--kg-card-end:[^>]*-->/gi, '');
  return html.trim();
}

function generateDescription(html, customExcerpt) {
  if (customExcerpt && customExcerpt.trim()) return customExcerpt.trim();
  const plain = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return plain.slice(0, 160).replace(/\s\S*$/, '').trim() + '...';
}

function yamlStr(val) {
  if (!val) return '""';
  // Escape double quotes, wrap in double quotes
  return `"${val.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function buildFrontmatter(post, category) {
  const pubDate = new Date(post.published_at).toISOString().split('T')[0];
  const html = post.html || '';
  const description = generateDescription(html, post.custom_excerpt);
  const image = post.feature_image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800';
  const rt = readTime(html);
  const featured = post.featured ? 'true' : 'false';

  return `---
title: ${yamlStr(post.title)}
description: ${yamlStr(description)}
pubDate: ${pubDate}
author: "BatteryTrail"
image: ${yamlStr(image)}
category: ${yamlStr(category)}
readTime: ${yamlStr(rt)}
featured: ${featured}
tags: []
ghostSlug: ${yamlStr(post.slug)}
ghostId: ${yamlStr(post.id)}
---`;
}

function processPost(post) {
  const category = categorize(post.slug);
  const frontmatter = buildFrontmatter(post, category);
  const html = cleanHtml(post.html || '');
  return `${frontmatter}\n\n${html}\n`;
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

const posts = db.posts.filter(
  (p) => p.type === 'post' && p.status === 'published'
);

console.log(`Found ${posts.length} published posts`);

// Clear existing template posts
if (fs.existsSync(OUTPUT_DIR)) {
  const existing = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  for (const f of existing) {
    fs.unlinkSync(path.join(OUTPUT_DIR, f));
    console.log(`  Removed template: ${f}`);
  }
} else {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Write redirects file
fs.mkdirSync(path.join(__dirname, '../public'), { recursive: true });
const redirectLines = [];

let written = 0;
let errors = 0;

for (const post of posts) {
  try {
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

console.log(`\nDone: ${written} posts written, ${errors} errors`);
console.log(`Redirects written to public/_redirects`);
