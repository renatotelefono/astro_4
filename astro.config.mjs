// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  output: 'static', // ✅ Sito statico
  integrations: [mdx(), sitemap()],
  build: {
    outDir: './dist', // ✅ Cartella output (opzionale, è il default)
  },
});
