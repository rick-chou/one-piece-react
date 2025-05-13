import InternalThemeProvider from './ThemeProvider';
import { useTheme } from './hooks/useTheme';

export type { ThemeProviderProps } from './ThemeProvider';

type InternalThemeProviderType = typeof InternalThemeProvider;

type CompoundedComponent = InternalThemeProviderType & {
  useTheme: typeof useTheme;
};

const ThemeProvider = InternalThemeProvider as CompoundedComponent;

ThemeProvider.useTheme = useTheme;

export default ThemeProvider;
