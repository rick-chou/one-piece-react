import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@rickzhou/react-css': resolve(__dirname, '../packages/@rick-css'),
      '@rickzhou/react-ui': resolve(__dirname, '../packages/@rick-ui'),
      '@rickzhou/react-fabric': resolve(__dirname, '../packages/@rick-fabric'),
      '@rickzhou/react-test': resolve(__dirname, '../packages/@rick-test'),
    },
  },
});
