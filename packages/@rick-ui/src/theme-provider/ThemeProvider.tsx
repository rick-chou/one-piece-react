import { Global, type SerializedStyles } from '@emotion/react';
import { memoSVC } from '@rickzhou/react-utils';
import { theme as antdTheme, ConfigProvider } from 'antd';
import { type PropsWithChildren } from 'react';
import { useTheme } from './hooks/useTheme';
import { globalStyle } from './style/global';
import { Theme } from './Theme';

export type ThemeProviderProps = PropsWithChildren<{
  rootStyle?: SerializedStyles;
}>;

const ThemeProvider = memoSVC<ThemeProviderProps>(({ children, rootStyle }) => {
  const {
    theme,
    typography: { fontFamily },
  } = useTheme();
  return (
    <div className={theme} css={rootStyle}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily,
          },
          algorithm:
            theme === 'dark'
              ? antdTheme.darkAlgorithm
              : antdTheme.defaultAlgorithm,
        }}>
        <Global styles={globalStyle} />
        <Theme />
        {children}
      </ConfigProvider>
    </div>
  );
});

export default ThemeProvider;
