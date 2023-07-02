import { onThemeChange } from '@/store/slice/themeSlice';
import { type ThemeMode } from '@/type';
import { useCallback } from 'react';
import { useRickDispatch, useRickSelector } from './useStore';

export const useTheme = () => {
  const theme = useRickSelector(state => state.theme) as ThemeMode;
  const dispatch = useRickDispatch();

  const toggleTheme = useCallback(() => {
    const newMode = theme === 'dark' ? 'light' : 'dark';
    dispatch(onThemeChange(newMode));
    document.documentElement.setAttribute('data-theme', newMode);
  }, [dispatch, theme]);

  return {
    theme,
    toggleTheme,
  };
};
