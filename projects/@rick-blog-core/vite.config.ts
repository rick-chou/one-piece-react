import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import mdxMermaid from 'mdx-mermaid';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';
// import mdxInjectImport from './src/blog/plugins/inject-import';

const baseUrl = '/blog/';

export default defineConfig({
  base: baseUrl,
  envPrefix: 'RICK_',
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    target: 'ESNext',
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash'],
          antd: ['antd'],
          react: ['react'],
        },
      },
    },
  },

  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    mdx({
      jsxImportSource: '@emotion/react',
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        remarkMdxFrontmatter,
        // mdxInjectImport,
        mdxMermaid,
      ],
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
