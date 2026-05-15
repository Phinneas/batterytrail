#!/usr/bin/env node
/**
 * fix-dates.mjs
 * Finds posts in SonicJS where publishedAt is blank/invalid and patches them
 * using the post's created_at timestamp as a fallback.
 *
 * Usage:
 *   node scripts/fix-dates.mjs --email=admin@example.com --password=yourpass
 *
 * Or with a pre-obtained token:
 *   SONICJS_API_TOKEN=eyJ... node scripts/fix-dates.mjs
 */

const API_URL = process.env.SONICJS_API_URL || 'https://sonicjscms.buzzuw2.workers.dev';

const args = process.argv.slice(2);
function getArg(name) {
  const match = args.find(a => a.startsWith(`--${name}=`));
  return match ? match.split('=').slice(1).join('=') : null;
}

let authToken = process.env.SONICJS_API_TOKEN || '';
const loginEmail = getArg('email');
const loginPassword = getArg('password');

function headers() {
  const h = { 'Content-Type': 'application/json' };
  if (authToken) h['Authorization'] = `Bearer ${authToken}`;
  return h;
}

async function login(email, password) {
  console.log(`Logging in as ${email}...`);
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(`Login failed (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return data.token;
}

async function fetchPosts() {
  const res = await fetch(
    `${API_URL}/api/collections/blog-posts/content?filter[status][equals]=published&sort=-created_at`,
    { headers: headers() }
  );
  if (!res.ok) throw new Error(`Fetch failed (${res.status}): ${await res.text()}`);
  const data = await res.json();
  return data.data || [];
}

async function patchPost(id, publishedAt) {
  // Try PATCH first, fall back to PUT if not supported
  const url = `${API_URL}/api/collections/blog-posts/content/${id}`;
  let res = await fetch(url, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify({ data: { publishedAt } }),
  });
  if (res.status === 405) {
    // Some SonicJS versions only support PUT
    res = await fetch(url, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify({ data: { publishedAt } }),
    });
  }
  return res;
}

async function main() {
  if (!authToken) {
    if (!loginEmail || !loginPassword) {
      console.error('Authentication required. Provide either:');
      console.error('  node scripts/fix-dates.mjs --email=admin@example.com --password=yourpass');
      console.error('  SONICJS_API_TOKEN=eyJ... node scripts/fix-dates.mjs');
      process.exit(1);
    }
    authToken = await login(loginEmail, loginPassword);
    console.log('  Authenticated.\n');
  }

  console.log('Fetching all posts...');
  const posts = await fetchPosts();
  console.log(`  Found ${posts.length} posts.\n`);

  const badPosts = posts.filter(p => !p.data.publishedAt || isNaN(new Date(p.data.publishedAt).getTime()));
  if (badPosts.length === 0) {
    console.log('✓ No posts with invalid publishedAt found. Nothing to fix.');
    return;
  }

  console.log(`Found ${badPosts.length} post(s) with missing/invalid publishedAt:\n`);

  for (const post of badPosts) {
    const fallback = new Date(post.created_at).toISOString();
    console.log(`  Patching: ${post.data.slug}`);
    console.log(`    publishedAt: ${JSON.stringify(post.data.publishedAt)} → ${fallback}`);

    const res = await patchPost(post.id, fallback);
    if (res.ok) {
      console.log(`    ✓ Updated`);
    } else {
      const text = await res.text();
      console.error(`    ✗ Failed (${res.status}): ${text}`);
    }
  }

  console.log('\nDone.');
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
