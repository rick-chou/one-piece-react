import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { VitePWA } from 'vite-plugin-pwa';
import { description, name } from './package.json';

const baseUrl = '/repl/';

export default defineConfig({
  base: baseUrl,
  build: {
    target: 'ESNext',
    rollupOptions: {
      output: {
        manualChunks: {
          'monaco-editor': ['monaco-editor'],
          antd: ['antd'],
          react: ['react'],
        },
      },
    },
  },
  plugins: [
    nodePolyfills(),
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
    tailwindcss(),
    VitePWA({
      disable: true,
      injectRegister: 'auto',
      workbox: {
        maximumFileSizeToCacheInBytes: 500 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,ico,png,jpg,jpeg,svg,mp3}'],
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      useCredentials: true,
      includeAssets: ['public/*'],
      manifest: {
        name: name,
        start_url: '/',
        short_name: name,
        description,
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon.png',
            sizes: '1280x1280',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {},
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, '../../'),
      '@rickzhou/react-repl': path.resolve(
        __dirname,
        '../../projects/@rick-repl/src',
      ),
      /**
       * @description browser-external:source-map-js:9 Module "source-map-js" has been externalized for browser compatibility. Cannot access "source-map-js.SourceMapConsumer" in client code.
       * @link https://github.com/vitejs/vite/discussions/14966#discussioncomment-8230891
       */
      'source-map-js': 'source-map',
    },
  },
});
