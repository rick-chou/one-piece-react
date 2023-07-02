import { useTheme } from '@/hooks/useTheme';
import { type ThemeMode } from '@/type';
import { css, Global } from '@emotion/react';

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
  return (
    <Global
      styles={css(
        {
          background: themeConfig[theme].colorBg,
          color: themeConfig[theme].colorText,
        },
        css`
          :root {
            --body-font: 'Odibee Sans', 'Inter', sans-serif;

            --color-switch-button-active: #0451fb;

            ${theme === 'dark'
              ? `
              --color-primary-bg: #16171a;
              --color-secondary-bg: #000;
              --color-primary-bg-hover: #fafafa;
              --color-primary-text: #c7c7c7;


              --color-calculator-bg: #131419;
              --color-calculator-primary-text: #c7c7c7;
              --color-calculator-secondary-text: #03a9f4;
              --color-calculator-soft-highlight: rgba(255, 255, 255, 0.05);
              --color-calculator-dark-highlight: rgba(0, 0, 0, 0.51);
              `
              : `
              --color-primary-bg: #e0e5ec;
              --color-secondary-bg: #fff;
              --color-primary-bg-hover: #fafafa;
              --color-primary-text: #16171a;
              

              --color-calculator-bg: #e0e5ec;
              --color-calculator-primary-text: rgba(144, 152, 168, 1);
              --color-calculator-secondary-text: rgba(51, 64, 89, 1);
              --color-calculator-soft-highlight: rgba(255, 255, 255, 0.43);
              --color-calculator-dark-highlight: rgba(217, 210, 200, 0.51);
              `}
          }
        `,
      )}
    />
  );
};
