import { useTheme } from '@/hooks/useTheme';
import { type ThemeMode } from '@/interface';
import { css, Global } from '@emotion/react';
import { useEffect, type FC, type PropsWithChildren } from 'react';
import { AntdStyle } from './antd-style';

type ThemeType = {
  colorBg: string;
  colorText: string;
};

export const light: ThemeType = {
  colorBg: '#e0e7f6',
  colorText: '#1f1d2b',
};

export const dark: ThemeType = {
  colorBg: '#1f1d2b',
  colorText: '#e0e7f6',
};

export const themeConfig: Record<ThemeMode, ThemeType> = {
  light,
  dark,
};

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

  return (
    <Global
      styles={css(
        css`
          :root {
            --body-font: 'Odibee Sans', 'Inter', sans-serif;
            --color-active: #bae0ff;
            --keyboard-duration: 0.3s;
            --keyboard-hue: 0;
            --keyboard-sat: 0%;
            --layout-content-height: ${contentHeight};

            ${theme === 'dark'
              ? `
              --color-primary-bg: #16171a;
              --color-secondary-bg: #000;
              --color-inverse-bg: #fff;
              --color-primary-bg-hover: #303133;
              --color-primary-text: #c7c7c7;
   


              --color-calculator-bg: #131419;
              --color-calculator-primary-text: #c7c7c7;
              --color-calculator-secondary-text: #03a9f4;
              --color-calculator-soft-highlight: rgba(255, 255, 255, 0.05);
              --color-calculator-dark-highlight: rgba(0, 0, 0, 0.51);

              --color-keyboard-bg: hsl(var(--keyboard-hue), var(--keyboard-sat), 90%);
              --color-keyboard-text: hsl(var(--keyboard-hue), var(--keyboard-sat), 10%);
              `
              : `
              --color-primary-bg: #e0e5ec;
              --color-secondary-bg: #fff;
              --color-inverse-bg: #000;
              --color-primary-bg-hover: #fafafa;
              --color-primary-text: #16171a;
              

              --color-calculator-bg: #e0e5ec;
              --color-calculator-primary-text: rgba(144, 152, 168, 1);
              --color-calculator-secondary-text: rgba(51, 64, 89, 1);
              --color-calculator-soft-highlight: rgba(255, 255, 255, 0.43);
              --color-calculator-dark-highlight: rgba(217, 210, 200, 0.51);

              --color-keyboard-bg: hsl(var(--keyboard-hue), var(--keyboard-sat), 20%);
              --color-keyboard-text: hsl(var(--keyboard-hue), var(--keyboard-sat), 90%);
              `}
          }
        `,
        AntdStyle,
      )}
    />
  );
};

export const contentHeight = '65vh';

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
