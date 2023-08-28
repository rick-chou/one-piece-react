import { Tab } from '@/types';
import { transform } from '@babel/standalone';

const compile = (tab: Tab) => {
  return transform(tab.content, {
    presets: ['react', 'typescript'],
    filename: tab.path.split('/').at(-1),
    plugins: [
      // Babel plugin to get file import names
      function importGetter() {
        return {
          visitor: {
            ImportDeclaration(path: any) {
              const module: string = path.node.source.value;
            },
          },
        };
      },
    ],
  }).code;
};

self.addEventListener('message', async ({ data }) => {
  const tabs: Tab[] = data;

  const main = tabs.find(i => i.path === 'file:///main.tsx');

  try {
    self.postMessage(compile(main!));
  } catch (e) {
    self.postMessage({ event: 'ERROR', error: e });
  }
});
