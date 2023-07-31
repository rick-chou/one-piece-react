import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import mdxMermaid from 'mdx-mermaid';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkGfm from 'remark-gfm';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

const baseUrl = '/rick-blog/';

export default defineConfig({
  base: baseUrl,
  envPrefix: 'RICK_',
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    target: 'ESNext',
  },

  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    visualizer({
      template: 'treemap', // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/analyse.html', // will be saved in project's root
    }),
    mdx({
      jsxImportSource: '@emotion/react',
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkGfm, [mdxMermaid, { output: 'svg' }]],
      rehypePlugins: [rehypeHighlight, rehypeMdxCodeProps],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    // global: {},
  },
});
