#!/usr/bin/env node
/**
 * migrate-to-sonicjs.mjs
 * Reads local markdown posts and imports them into a SonicJS instance.
 * 
 * Usage:
 *   node scripts/migrate-to-sonicjs.mjs --email=admin@example.com --password=yourpass
 * 
 * Or with a pre-obtained token:
 *   SONICJS_API_TOKEN=eyJ... node scripts/migrate-to-sonicjs.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, '../src/content/posts');

const API_URL = process.env.SONICJS_API_URL || 'https://sonicjs-app.buzzuw2.workers.dev';

// Parse CLI args
const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  if (idx === -1) return null;
  return args[idx + 1];
}

const loginEmail = getArg('email');
const loginPassword = getArg('password');

let authToken = process.env.SONICJS_API_TOKEN || '';

function headers() {
  const h = { 'Content-Type': 'application/json' };
  if (authToken) h['Authorization'] = `Bearer ${authToken}`;
  return h;
}

// --- Auth ---

async function login(email, password) {
  console.log(`Logging in as ${email}...`);
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Login failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.token;
}

// --- Collection ---

async function getBlogPostsCollection() {
  const res = await fetch(`${API_URL}/api/collections`, { headers: headers() });
  const data = await res.json();
  return data.data.find(c => c.name === 'blog-posts');
}

async function updateCollectionSchema(collection) {
  const currentSchema = collection.schema;

  // Add missing fields that BatteryTrail needs
  const updatedSchema = {
    ...currentSchema,
    properties: {
      ...currentSchema.properties,
      category: {
        type: 'select',
        title: 'Category',
        enum: ['RV', 'Ebike', 'Battery'],
        enumLabels: ['RV', 'Ebike', 'Battery'],
        default: 'RV',
      },
      readTime: {
        type: 'string',
        title: 'Read Time',
        helpText: 'e.g. "5 min read"',
      },
      featured: {
        type: 'boolean',
        title: 'Featured',
        default: false,
      },
    },
  };

  const res = await fetch(`${API_URL}/admin/collections/${collection.id}`, {
    method: 'PUT',
    headers: headers(),
    body: JSON.stringify({ ...collection, schema: updatedSchema }),
  });

  if (res.ok) {
    console.log('  Added category, readTime, featured fields to blog-posts collection');
  } else {
    const text = await res.text();
    console.log(`  Warning: Could not update schema (${res.status}). You may need to add these fields manually in the admin UI:`);
    console.log('    - category (select: RV, Ebike, Battery)');
    console.log('    - readTime (string)');
    console.log('    - featured (boolean)');
  }
}

// --- Content ---

async function createContent(contentData) {
  const res = await fetch(`${API_URL}/api/content`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(contentData),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

  return res.json();
}

// --- Frontmatter Parser ---

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, body: content };

  const raw = match[1];
  const body = match[2].trim();
  const data = {};

  for (const line of raw.split('\n')) {
    const kvMatch = line.match(/^(\w+):\s*(.*)$/);
    if (!kvMatch) continue;

    const key = kvMatch[1];
    let value = kvMatch[2].trim();

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    if (value === '[]') {
      data[key] = [];
    } else if (value.startsWith('\n  - ') || value.includes('\n  - ')) {
      const items = value.split('\n').map(l => l.replace(/^\s*-\s*/, '').trim()).filter(Boolean);
      data[key] = items;
    } else if (value === 'true') {
      data[key] = true;
    } else if (value === 'false') {
      data[key] = false;
    } else {
      data[key] = value;
    }
  }

  return { data, body };
}

// --- Main ---

async function main() {
  // Step 1: Get auth token
  if (!authToken) {
    if (!loginEmail || !loginPassword) {
      console.error('Authentication required. Provide either:');
      console.error('  --email=you@example.com --password=yourpass');
      console.error('  SONICJS_API_TOKEN=eyJ... (environment variable)');
      process.exit(1);
    }
    authToken = await login(loginEmail, loginPassword);
    console.log('  Got auth token\n');
  }

  console.log(`SonicJS API: ${API_URL}\n`);

  // Step 2: Ensure collection has our fields
  console.log('Step 1: Checking blog-posts collection schema...');
  const collection = await getBlogPostsCollection();
  if (!collection) {
    console.error('blog-posts collection not found! Create it in the admin UI first.');
    process.exit(1);
  }
  await updateCollectionSchema(collection);
  console.log('');

  // Step 3: Migrate posts
  if (!fs.existsSync(POSTS_DIR)) {
    console.error(`Posts directory not found at ${POSTS_DIR}`);
    console.error('Run the Ghost migration script first: node scripts/ghost-to-mdx.mjs <export.json>');
    process.exit(1);
  }

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  console.log(`Step 2: Migrating ${files.length} posts...\n`);

  let imported = 0;
  let errors = 0;

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, body } = parseFrontmatter(content);

    const slug = file.replace('.md', '');
    const tagsStr = Array.isArray(data.tags) ? data.tags.join(', ') : (data.tags || '');

    const postData = {
      collectionId: collection.id,
      title: data.title || slug,
      slug: slug,
      status: 'published',
      data: {
        title: data.title || slug,
        slug: slug,
        content: body,
        excerpt: data.description || '',
        featuredImage: data.image || '',
        author: data.author || 'BatteryTrail',
        category: data.category || 'RV',
        readTime: data.readTime || '5 min read',
        featured: data.featured || false,
        publishedAt: data.pubDate ? new Date(data.pubDate).toISOString() : new Date().toISOString(),
        tags: tagsStr,
      },
    };

    try {
      await createContent(postData);
      imported++;
      console.log(`  ✓ ${slug}`);
    } catch (err) {
      errors++;
      console.error(`  ✗ ${slug}: ${err.message}`);
    }
  }

  console.log(`\nDone: ${imported} imported, ${errors} errors`);
}

main().catch(console.error);
