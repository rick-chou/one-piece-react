import { loader } from '@monaco-editor/react';
import { Logger } from '@rickzhou/react-utils';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { LanguageIdEnum, setupLanguageFeatures } from 'monaco-sql-languages';

loader.config({ monaco });

loader.init().then(monaco => {
  /** define theme  */
  Logger.success('MONACO EDITOR THEME INIT');
  setupLanguageFeatures(LanguageIdEnum.MYSQL, {
    completionItems: { enable: true, triggerCharacters: [' ', '.'] },
  });
  Logger.success('MYSQL LANGUAGE SERVICE INIT');
  // monaco.editor.defineTheme('dark', darkTheme);
  // monaco.editor.defineTheme('light', lightTheme);
});

export { monaco };
