import { type ThemeMode } from '@/interface';
import {
  onThemeFontFamilyChange,
  onThemeModeChange,
} from '@/store/slice/themeSlice';
import { useCallback } from 'react';
import { useRickDispatch, useRickSelector } from './useStore';

export const useTheme = () => {
  const { mode, fontFamily } = useRickSelector(state => state.theme);
  const dispatch = useRickDispatch();

  const toggleThemeMode = useCallback(
    (_theme?: ThemeMode) => {
      const newMode = _theme ?? (mode === 'dark' ? 'light' : 'dark');
      dispatch(onThemeModeChange(newMode));
    },
    [dispatch, mode],
  );

  const toggleThemeFontFamily = useCallback(
    (_font: string) => {
      dispatch(onThemeFontFamilyChange(_font));
    },
    [dispatch],
  );

  return {
    // mode
    mode,
    dark: mode === 'dark',
    light: mode === 'light',
    inverseTheme: (mode === 'dark' ? 'light' : 'dark') as typeof mode,
    toggleThemeMode,

    // font
    fontFamily,
    toggleThemeFontFamily,
  };
};
