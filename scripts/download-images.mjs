#!/usr/bin/env node
/**
 * download-images.mjs
 * Downloads all external images referenced in post frontmatter and content,
 * saves them locally, and updates the markdown files to use local paths.
 * Usage: node scripts/download-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, '../src/content/posts');
const IMAGES_DIR = path.join(__dirname, '../public/images/posts');

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(destPath);
    const client = url.startsWith('https') ? https : http;

    client.get(url, { timeout: 15000 }, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlinkSync(destPath);
        downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(destPath);
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    }).on('timeout', () => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

function getFilenameFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    let filename = path.basename(pathname);
    // Remove query params
    filename = filename.split('?')[0].split('#')[0];
    // Ensure valid extension
    const ext = path.extname(filename).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
      filename = filename.replace(ext, '') + '.jpg';
    }
    return filename;
  } catch {
    return 'image.jpg';
  }
}

async function main() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.error('Posts directory not found');
    process.exit(1);
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  console.log(`Scanning ${files.length} posts for external images...\n`);

  let downloaded = 0;
  let failed = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    const slug = file.replace('.md', '');
    const slugDir = path.join(IMAGES_DIR, slug);
    let modified = false;

    // 1. Extract featured image from frontmatter
    const imageMatch = content.match(/^image:\s*"([^"]+)"/m);
    if (imageMatch) {
      const imageUrl = imageMatch[1];
      if (imageUrl.startsWith('http')) {
        try {
          const filename = getFilenameFromUrl(imageUrl);
          const localPath = `/images/posts/${slug}/${filename}`;
          const destPath = path.join(slugDir, filename);

          if (fs.existsSync(destPath)) {
            console.log(`  ⊘ ${slug}: featured image already downloaded`);
          } else {
            fs.mkdirSync(slugDir, { recursive: true });
            await downloadFile(imageUrl, destPath);
            console.log(`  ✓ ${slug}: downloaded featured image → ${localPath}`);
          }

          content = content.replace(
            `image: "${imageUrl}"`,
            `image: "${localPath}"`
          );
          modified = true;
          downloaded++;
        } catch (err) {
          console.error(`  ✗ ${slug}: failed featured image: ${err.message}`);
          failed++;
        }
      } else {
        skipped++;
      }
    }

    // 2. Extract inline images from markdown content (![](url))
    const inlineImageRegex = /!\[([^\]]*)\]\((https:\/\/[^)]+)\)/g;
    let match;
    while ((match = inlineImageRegex.exec(content)) !== null) {
      const fullMatch = match[0];
      const altText = match[1];
      const imageUrl = match[2];

      try {
        const filename = getFilenameFromUrl(imageUrl);
        const localPath = `/images/posts/${slug}/${filename}`;
        const destPath = path.join(slugDir, filename);

        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(slugDir, { recursive: true });
          await downloadFile(imageUrl, destPath);
          console.log(`  ✓ ${slug}: downloaded inline image → ${localPath}`);
          downloaded++;
        }

        content = content.replace(fullMatch, `![${altText}](${localPath})`);
        modified = true;
      } catch (err) {
        console.error(`  ✗ ${slug}: failed inline image: ${err.message}`);
        failed++;
      }
    }

    // 3. Extract inline images from <img src="..."> tags
    const imgTagRegex = /<img[^>]+src=["'](https:\/\/[^"']+)["'][^>]*>/g;
    while ((match = imgTagRegex.exec(content)) !== null) {
      const fullMatch = match[0];
      const imageUrl = match[1];

      try {
        const filename = getFilenameFromUrl(imageUrl);
        const localPath = `/images/posts/${slug}/${filename}`;
        const destPath = path.join(slugDir, filename);

        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(slugDir, { recursive: true });
          await downloadFile(imageUrl, destPath);
          console.log(`  ✓ ${slug}: downloaded <img> image → ${localPath}`);
          downloaded++;
        }

        content = content.replace(imageUrl, localPath);
        modified = true;
      } catch (err) {
        console.error(`  ✗ ${slug}: failed <img> image: ${err.message}`);
        failed++;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  }

  console.log(`\nDone: ${downloaded} downloaded, ${failed} failed, ${skipped} already local`);
}

main().catch(console.error);
