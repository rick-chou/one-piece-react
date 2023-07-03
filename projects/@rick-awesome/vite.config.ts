import react from '@vitejs/plugin-react';
import path from 'path';
// import { Mode, plugin as md } from 'vite-plugin-markdown';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { description, name } from './package.json';

const baseUrl = '/react-awesome/';

export default defineConfig({
  base: baseUrl,
  envPrefix: 'RICK_',
  build: {
    target: 'ESNext',
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash'],
          echarts: ['echarts'],
          antd: ['antd'],
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
    // md({ mode: [Mode.HTML] }),
    // vue(),
    // veauryVitePlugins({
    //   type: 'react',
    // }),
    VitePWA({
      injectRegister: 'auto',
      workbox: {
        maximumFileSizeToCacheInBytes: 500 * 1024 * 1024,
        globPatterns: ['**/*.{html,js,css,ico,png,svg}'],
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      useCredentials: true,
      includeAssets: ['public/*'],
      manifest: {
        name: name,
        start_url: `${baseUrl}?mode=pwa`,
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
      '@rick-flow': path.resolve(__dirname, './src/roadmap/flowcharts'),
      '@rick-img-resize': path.resolve(
        __dirname,
        './src/project/rick-img-resize',
      ),
    },
  },
});
