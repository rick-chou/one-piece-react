import { useTheme } from '@/hooks/useTheme';
import { type ThemeMode } from '@/interface';
import { css, Global, type SerializedStyles } from '@emotion/react';
import { useEffect, type FC, type PropsWithChildren } from 'react';
import { AntdStyle } from './antd-style';

type ThemeType = {
  [key: string]: string;
  colorPrimaryBg: string;
  colorSecondaryBg: string;
  colorInverseBg: string;
  colorPrimaryBgHover: string;
  colorPrimaryText: string;
};

export const light: ThemeType = {
  colorPrimaryBg: '#e0e5ec',
  colorSecondaryBg: '#fff',
  colorInverseBg: '#000',
  colorPrimaryBgHover: '#fafafa',
  colorPrimaryText: '#16171a',
};

export const dark: ThemeType = {
  colorPrimaryBg: '#16171a',
  colorSecondaryBg: '#000',
  colorInverseBg: '#fff',
  colorPrimaryBgHover: '#303133',
  colorPrimaryText: '#c7c7c7',
};

export const themeConfig: Record<ThemeMode, ThemeType> = {
  light,
  dark,
};

export const Theme = () => {
  const { mode, dark, fontFamily } = useTheme();
  useEffect(() => {
    document.documentElement.setAttribute('class', mode);

    // depend on system them mode
    // const media = window.matchMedia('(prefers-color-scheme: dark)');

    // const onThemeModeChange = (e: MediaQueryListEvent) => {
    //   document.documentElement.setAttribute(
    //     'class',
    //     e.matches ? 'dark' : 'light',
    //   );
    // };

    // media.addEventListener('change', onThemeModeChange);

    // return () => {
    //   media.removeEventListener('change', onThemeModeChange);
    // };
  }, [mode]);

  // convenient to refer to variables in css / scss
  // use themeConfig in css in js
  return (
    <Global
      styles={css(
        css`
          :root {
            --body-font: ${fontFamily};
            --color-active: #bae0ff;
            --keyboard-duration: 0.3s;
            --keyboard-hue: 0;
            --keyboard-sat: 0%;
            --layout-content-height: ${contentHeight};

            --color-primary-bg: ${themeConfig[mode].colorPrimaryBg};
            --color-secondary-bg: ${themeConfig[mode].colorSecondaryBg};
            --color-inverse-bg: ${themeConfig[mode].colorInverseBg};
            --color-primary-bg-hover: ${themeConfig[mode].colorPrimaryBgHover};
            --color-primary-text: ${themeConfig[mode].colorPrimaryText};

            ${dark
              ? `
              --color-calculator-bg: #131419;
              --color-calculator-primary-text: #c7c7c7;
              --color-calculator-secondary-text: #03a9f4;
              --color-calculator-soft-highlight: rgba(255, 255, 255, 0.05);
              --color-calculator-dark-highlight: rgba(0, 0, 0, 0.51);

              --color-keyboard-bg: hsl(var(--keyboard-hue), var(--keyboard-sat), 90%);
              --color-keyboard-text: hsl(var(--keyboard-hue), var(--keyboard-sat), 10%);
              `
              : `
              --color-calculator-bg: #e0e5ec;
              --color-calculator-primary-text: rgba(144, 152, 168, 1);
              --color-calculator-secondary-text: rgba(51, 64, 89, 1);
              --color-calculator-soft-highlight: rgba(255, 255, 255, 0.43);
              --color-calculator-dark-highlight: rgba(217, 210, 200, 0.51);

              --color-keyboard-bg: hsl(var(--keyboard-hue), var(--keyboard-sat), 20%);
              --color-keyboard-text: hsl(var(--keyboard-hue), var(--keyboard-sat), 90%);
              `}

            // blog
            blockquote {
              border-left-color: var(--color-inverse-bg);
            }
          }
        `,
        AntdStyle,
      )}
    />
  );
};

export const contentHeight = '65vh';

export const codeFontFamily = import.meta.env.RICK_CODE_FONTFAMILY;
export const containerOpacity = import.meta.env.RICK_OPACITY;

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: contentHeight,
        overflowY: 'scroll',
      })}>
      {children}
    </div>
  );
};

export const ThemeWrapper: FC<
  PropsWithChildren<{ style?: SerializedStyles; useBackground?: boolean }>
> = ({ children, style, useBackground }) => {
  const { mode } = useTheme();
  return (
    <div
      className={mode}
      css={style}
      style={{
        background: useBackground ? 'var(--color-calculator-bg)' : 'inherit',
      }}>
      {children}
    </div>
  );
};
