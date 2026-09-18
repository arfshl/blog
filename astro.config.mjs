import { defineConfig } from 'astro/config';
import { unified, rehypeHeadingIds } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://arfshl.github.io',
  base: '/blog',
  markdown: {
    processor: unified({
      rehypePlugins: [
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
      ],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});