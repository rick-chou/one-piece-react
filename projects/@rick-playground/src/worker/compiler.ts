import { Tab } from '@/types';
import { transform } from '@babel/standalone';
import { last } from 'lodash';

const entryFileName = 'file:///main.tsx';

const importmap: Record<string, string> = { react: `https://esm.sh/react` };

const getInternalModule = (tabs: Tab[], moduleName: string) => {
  let _moduleName = last(moduleName.split('./'))!;
  if (!_moduleName.includes('.')) {
    _moduleName += '.tsx';
  }
  return tabs.find(i => last(i.path.split('file:///')) === _moduleName)!;
};

const babelTransform = (filename: string, code: string, tabs: Tab[]) => {
  let _code = code;
  if (filename.endsWith('.tsx')) {
    _code = `import React from 'react';\n${code}`;
  }
  return transform(_code, {
    presets: ['react', 'typescript'],
    filename,
    plugins: [
      // Babel plugin to get file import names
      function importGetter() {
        return {
          visitor: {
            ImportDeclaration(path: any) {
              const module: string = path.node.source.value;
              if (module.startsWith('.')) {
                const _module = getInternalModule(tabs, module);
                path.node.source.value = URL.createObjectURL(
                  new Blob(
                    [babelTransform(_module.path, _module.content, tabs)],
                    {
                      type: 'application/javascript',
                    },
                  ),
                );
              } else {
                // Third-party modules
                if (!importmap[module]) {
                  importmap[module] = `https://esm.sh/${module}`;
                }
              }
            },
          },
        };
      },
    ],
  }).code!;
};

const compile = (tabs: Tab[]) => {
  const main = tabs.find(i => i.path === entryFileName)!;
  const compileCode = babelTransform(entryFileName, main.content, tabs);
  return { importmap, compileCode };
};

self.addEventListener('message', async ({ data }) => {
  const tabs: Tab[] = data;

  try {
    self.postMessage({
      type: 'UPDATE_CODE',
      data: compile(tabs!),
    });
  } catch (e) {
    self.postMessage({ event: 'ERROR', error: e });
  }
});
