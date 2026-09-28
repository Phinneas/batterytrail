// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  integrations: [tailwind(), sitemap()],
  vite: {
    ssr: {
      noExternal: ['turndown'],
    },
  },
  trailingSlash: 'never',
  site: 'https://www.batterytrail.com',
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
