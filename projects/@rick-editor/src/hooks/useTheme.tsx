import { type EditorTheme } from '@rickzhou/react-editor/assets/editor-themes';
import { Context } from '@rickzhou/react-editor/store';
import { ActionType, type EditorThemeType } from '@rickzhou/react-editor/types';
import { useMonaco } from '@monaco-editor/react';
import { type editor } from 'monaco-editor';
import { useCallback, useContext, useEffect, useMemo } from 'react';

export const useTheme = () => {
  const monaco = useMonaco();
  const { state, dispatch } = useContext(Context);

  const changeTheme = useCallback(
    async (theme: EditorTheme) => {
      if (monaco) {
        const themeConfig = (await import('@rickzhou/react-editor/assets/editor-themes'))[theme] as EditorThemeType;
        dispatch({
          type: ActionType.UPDATE_THEME,
          payload: { theme: { ...themeConfig, name: theme } },
        });
        monaco.editor.defineTheme(theme, themeConfig as editor.IStandaloneThemeData);
        monaco.editor.setTheme(theme);
      }
    },
    [monaco, dispatch],
  );

  useEffect(() => {
    if (monaco) {
      void changeTheme('Amy');
    }
  }, [monaco, changeTheme]);

  return {
    changeTheme,
    themeColor: useMemo(
      () => state.theme.colors['editor.background'],
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [state.theme.name],
    ),
  };
};
