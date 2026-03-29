// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    platformProxy: { enabled: true },
    imageService: 'compile',
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [keystatic()],
  trailingSlash: 'never',
  site: 'https://www.batterytrail.com',
});
