import { css, Global, type SerializedStyles } from '@emotion/react';
import { theme as antdTheme, ConfigProvider } from 'antd';
import { useEffect, type FC, type PropsWithChildren } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import { fontFamily, themeConfig } from '../../_config/theme';
import { AntdStyle } from './antd-style';
import { globalStyle } from './global-style';
import { useTheme } from './useTheme';

export const Theme = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.setAttribute('class', theme);

    // depend on system them mode
    // const media = window.matchMedia('(prefers-color-scheme: dark)');

    // const onThemeChange = (e: MediaQueryListEvent) => {
    //   document.documentElement.setAttribute(
    //     'class',
    //     e.matches ? 'dark' : 'light',
    //   );
    // };

    // media.addEventListener('change', onThemeChange);

    // return () => {
    //   media.removeEventListener('change', onThemeChange);
    // };
  }, [theme]);

  // convenient to refer to variables in css / scss
  // use themeConfig in css in js
  return (
    <Global
      styles={css(
        css`
          :root {
            --body-font: ${fontFamily};
            --color-active: #bae0ff;

            --color-primary-bg: ${themeConfig[theme].colorPrimaryBg};
            --color-secondary-bg: ${themeConfig[theme].colorSecondaryBg};
            --color-inverse-bg: ${themeConfig[theme].colorInverseBg};
            --color-primary-bg-hover: ${themeConfig[theme].colorPrimaryBgHover};
            --color-primary-text: ${themeConfig[theme].colorPrimaryText};
          }
        `,
        AntdStyle,
      )}
    />
  );
};

export const ThemeProvider: FC<PropsWithChildren<{ style?: SerializedStyles }>> = ({ children, style }) => {
  const { theme } = useTheme();
  return (
    <div className={theme} css={style}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily,
          },
          algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        }}>
        <Global styles={globalStyle} />
        <Theme />
        <ScrollRestoration />
        {children}
      </ConfigProvider>
    </div>
  );
};
