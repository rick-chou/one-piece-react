import { editor, languages } from 'monaco-editor';
import { wireTmGrammars } from 'monaco-editor-textmate';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import { Registry } from 'monaco-textmate';
import { loadWASM } from 'onigasm';
import onigasm from 'onigasm/lib/onigasm.wasm?url';
import typescriptReactTM from './TypeScriptReact.tmLanguage.json';
import cssTM from './css.tmLanguage.json';
import vsDark from './vs_dark_rick.json';
import vsLight from './vs_light_rick.json';

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

let loadingWasm: Promise<void>;

const registry = new Registry({
  async getGrammarDefinition(scopeName) {
    return {
      format: 'json',
      content: scopeName === 'source.tsx' ? typescriptReactTM : cssTM,
    };
  },
});

const grammars = new Map();
grammars.set('typescript', 'source.tsx');
grammars.set('javascript', 'source.tsx');
grammars.set('css', 'source.css');

// monaco's built-in themes aren't powereful enough to handle TM tokens
// https://github.com/Nishkalkashyap/monaco-vscode-textmate-theme-converter#monaco-vscode-textmate-theme-converter
editor.defineTheme('vs-dark-rick', vsDark as editor.IStandaloneThemeData);
editor.defineTheme('vs-light-rick', vsLight as editor.IStandaloneThemeData);

const hookLanguages = languages.setLanguageConfiguration;

languages.setLanguageConfiguration = (
  languageId: string,
  configuration: languages.LanguageConfiguration,
) => {
  liftOff();
  return hookLanguages(languageId, configuration);
};

export async function liftOff(): Promise<void> {
  if (!loadingWasm) loadingWasm = loadWASM(onigasm);
  await loadingWasm;

  // wireTmGrammars only cares about the language part, but asks for all of monaco
  // we fool it by just passing in an object with languages
  await wireTmGrammars({ languages } as any, registry, grammars);
}

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

window.MonacoEnvironment = {
  getWorker(_moduleId: unknown, label: string) {
    switch (label) {
      case 'css':
        return new cssWorker();
      case 'json':
        return new jsonWorker();
      case 'typescript':
      case 'javascript':
        return new tsWorker();
      default:
        return new editorWorker();
    }
  },
};
