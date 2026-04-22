// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  trailingSlash: 'never',
  site: 'https://www.batterytrail.com',
  image: {
    domains: ['pub-sonicjs-media-dev.r2.dev'],
    remotePatterns: [{ protocol: 'https' }],
  },
});
