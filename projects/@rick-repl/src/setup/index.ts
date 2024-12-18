import { languages } from 'monaco-editor';
import { wireTmGrammars } from 'monaco-editor-textmate';
import { Registry } from 'monaco-textmate';
import { loadWASM } from 'onigasm';
import onigasm from 'onigasm/lib/onigasm.wasm?url';
import typescriptReactTM from './TypeScriptReact.tmLanguage.json';
import cssTM from './css.tmLanguage.json';

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

const hookLanguages = languages.setLanguageConfiguration;

languages.setLanguageConfiguration = (languageId: string, configuration: languages.LanguageConfiguration) => {
  liftOff();
  return hookLanguages(languageId, configuration);
};

export async function liftOff(): Promise<void> {
  if (!loadingWasm) {
    loadingWasm = loadWASM(onigasm);
    await loadingWasm;
  }

  // wireTmGrammars only cares about the language part, but asks for all of monaco
  // we fool it by just passing in an object with languages
  await wireTmGrammars({ languages } as any, registry, grammars);
}
