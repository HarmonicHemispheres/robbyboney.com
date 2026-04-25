import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://robbyboney.com',
  // Vercel-friendly static output
  output: 'static',
  build: {
    assets: '_astro',
  },
  server: {
    port: 4321,
  },
});
