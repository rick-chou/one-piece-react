import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      jsxImportSource: '@emotion/react',
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeHighlight, rehypeMdxCodeProps],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
