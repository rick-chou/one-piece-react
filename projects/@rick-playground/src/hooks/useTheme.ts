import { useLocalStorageState, useMount } from 'ahooks';

import vsDark from '@rickzhou/react-playground/setup/vs_dark_rick.json';
import vsLight from '@rickzhou/react-playground/setup/vs_light_rick.json';
import { editor } from 'monaco-editor';

export const useTheme = () => {
  useMount(() => {
    // monaco's built-in themes aren't powerful enough to handle TM tokens
    // https://github.com/Nishkalkashyap/monaco-vscode-textmate-theme-converter#monaco-vscode-textmate-theme-converter
    editor.defineTheme('vs-dark-rick', vsDark as editor.IStandaloneThemeData);
    editor.defineTheme('vs-light-rick', vsLight as editor.IStandaloneThemeData);
  });

  const [theme, setTheme] = useLocalStorageState<string>('theme', {
    defaultValue: 'vs-light-rick',
  });

  return {
    theme,
    setTheme,
  };
};
