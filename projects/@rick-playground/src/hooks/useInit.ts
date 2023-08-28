import { useBoolean, useMount } from 'ahooks';
import { Uri, editor, languages } from 'monaco-editor';
import { useTabs } from './useTabs';

import CompilerWorker from '@/worker/compiler?worker';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

const compilerOptions: languages.typescript.CompilerOptions = {
  strict: true,
  target: languages.typescript.ScriptTarget.ESNext,
  module: languages.typescript.ModuleKind.ESNext,
  moduleResolution: languages.typescript.ModuleResolutionKind.NodeJs,
  jsx: languages.typescript.JsxEmit.Preserve,
  allowNonTsExtensions: true,
};

languages.typescript.typescriptDefaults.setCompilerOptions(compilerOptions);
languages.typescript.javascriptDefaults.setCompilerOptions(compilerOptions);

const compiler = new CompilerWorker();

export const useInit = () => {
  const { tabs, setTabs } = useTabs();

  const [loading, { setFalse }] = useBoolean(true);

  const initModels = () => {
    const _tabs = [...tabs];
    _tabs!.forEach(i => {
      if (!editor.getModel(Uri.parse(i.path))) {
        const model = editor.createModel(
          i.content,
          undefined,
          Uri.parse(i.path),
        );

        model.onDidChangeContent(() => {
          i.content = model.getValue();
          compiler.postMessage(_tabs);
          setTabs(_tabs);
        });
      }
    });

    compiler.postMessage(_tabs);
  };

  const initExtraLibs = () => {
    /**
     * Inject Syntax Hints
     * @api languages.typescript.javascriptDefaults.addExtraLib
     * @api languages.typescript.javascriptDefaults.getExtraLibs
     */
    const reactTypes = import.meta.glob(
      [
        '/node_modules/{react,react-dom}/**/*.{d.ts,json}',
        '/node_modules/@types/{react,react-dom}/**/*.{d.ts,json}',
      ],
      { eager: true, as: 'raw' },
    );

    for (const path in reactTypes) {
      languages.typescript.typescriptDefaults.addExtraLib(
        reactTypes[path],
        `file://${path}`,
      );
      languages.typescript.javascriptDefaults.addExtraLib(
        reactTypes[path],
        `file://${path}`,
      );
    }
  };

  useMount(() => {
    initModels();
    initExtraLibs();

    setFalse();
  });

  return {
    loading,
    compiler,
  };
};
