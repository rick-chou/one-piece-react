import { type ThemeMode } from '@/core/interface';
import { onThemeChange } from '@/core/store/slice/themeSlice';
import { useCallback } from 'react';
import { useRickDispatch, useRickSelector } from './useStore';

export const useTheme = () => {
  const theme = useRickSelector(state => state.theme) as ThemeMode;
  const dispatch = useRickDispatch();

  const toggleTheme = useCallback(() => {
    const newMode = theme === 'dark' ? 'light' : 'dark';
    dispatch(onThemeChange(newMode));
  }, [dispatch, theme]);

  return {
    theme,
    dark: theme === 'dark',
    light: theme === 'light',
    inverseTheme: (theme === 'dark' ? 'light' : 'dark') as typeof theme,
    toggleTheme,
  };
};
