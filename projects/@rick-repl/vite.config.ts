import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
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
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    VitePWA({
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
