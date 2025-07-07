// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com', // metti qui il tuo dominio finale se lo hai
  output: 'static',            // ✅ static site
  integrations: [mdx(), sitemap()],
  build: {
    outDir: './dist',          // ✅ Render userà questa cartella
  },
});
