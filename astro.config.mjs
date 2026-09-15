import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  site: 'https://arfshl.github.io',
  base: command === 'build' ? '/blog' : '',
  vite: {
    plugins: [tailwindcss()],
  },
}));