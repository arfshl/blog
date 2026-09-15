import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arfshl.github.io',
  base: "/blog",
  vite: {
    plugins: [tailwindcss()]
  }
});