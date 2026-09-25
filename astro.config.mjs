import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://arfshl.github.io',
  base: '/blog',

  markdown: {
    syntaxHighlight: 'shiki',

    shikiConfig: {
      theme: 'github-dark',
    },

    processor: unified({
      rehypePlugins: [
        rehypeSlug,

        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
          },
        ],

        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener'],
          },
        ],
      ],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});