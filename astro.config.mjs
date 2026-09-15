import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arfshl.github.io',
  base: process.env.NODE_ENV === 'production' ? '/blog' : '',
  vite: {
    plugins: [tailwindcss()],
  },
});