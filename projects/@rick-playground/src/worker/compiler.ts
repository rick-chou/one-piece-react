import { Tab } from '@/types';
import { transform } from '@babel/standalone';

const entryFileName = 'file:///main.tsx';

const compile = (tab: Tab) => {
  const importmap: Record<string, string> = {};
  const compileCode = transform(tab.content, {
    presets: ['react', 'typescript'],
    filename: tab.path.split('/').at(-1),
    plugins: [
      // Babel plugin to get file import names
      function importGetter() {
        return {
          visitor: {
            ImportDeclaration(path: any) {
              const module: string = path.node.source.value;
              if (!module.startsWith('.')) {
                importmap[module] = `https://esm.sh/${module}`;
              }
            },
          },
        };
      },
    ],
  }).code;

  return { importmap, compileCode };
};

self.addEventListener('message', async ({ data }) => {
  const tabs: Tab[] = data;

  const main = tabs.find(i => i.path === entryFileName);

  try {
    self.postMessage({
      type: 'importmap',
      code: compile(main!).importmap,
    });
    self.postMessage({
      type: 'compile',
      code: compile(main!).compileCode,
    });
  } catch (e) {
    self.postMessage({ event: 'ERROR', error: e });
  }
});
