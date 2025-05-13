import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  outputPath: 'docs-dist',
  mfsu: true,
  themeConfig: defineThemeConfig({
    name: '@rickzhou/react-ui',
    showLineNum: false,
    logo: '/react.webp',
    nav: [{ title: 'Components', link: '/components/aurora' }],
    footer: false,
    socialLinks: {
      github: 'https://github.com/rick-chou',
    },
    title: '@rickzhou/react-ui',
    description: 'nothing changes if nothing changes',
    features: [],
    bannerConfig: {
      showBanner: true,
      bannerImgUrl:
        'https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/jpg/42.jpg',
    },
  }),
  scripts: ['https://cdn.tailwindcss.com?plugins=typography'],

  chainWebpack(memo, args) {
    memo
      .plugin('monaco-editor')
      .use(MonacoWebpackPlugin, [
        {
          features: [],
          languages: ['json', 'html', 'css', 'javascript', 'typescript'],
          customLanguages: [
            {
              label: 'mysql',
              entry:
                'monaco-sql-languages/esm/languages/mysql/mysql.contribution',
              worker: {
                id: '/esm/languages/mysql/',
                entry: 'monaco-sql-languages/esm/languages/mysql/mysql.worker',
              },
            },
          ],
        },
      ])
      .end();
    // console.log('memo', memo);
    return memo;
  },
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'zh-CN', name: '中文' },
  ],
});
