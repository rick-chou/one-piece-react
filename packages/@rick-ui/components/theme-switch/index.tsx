/**
 * @author
 * @link https://codepen.io/isaaclouzeiro/pen/YzRzmwQ
 */

import { memoSVC } from '@root/packages/@rick-utils';
import { useMemo } from 'react';
import { ThemeProvider } from '../theme-provider';
import { useTheme } from '../theme-provider/useTheme';
import { themeSwitchStyle } from './style';

export type ThemeSwitchProps = {
  className?: string;
};

export const ThemeSwitch = memoSVC<ThemeSwitchProps>(({ className = '' }) => {
  const { toggleTheme, theme } = useTheme();

  const isDarkMode = useMemo(() => theme === 'dark', [theme]);

  return (
    <ThemeProvider style={themeSwitchStyle}>
      <div className={`theme-switch ${className}`}>
        <button
          type="button"
          id="switch"
          onClick={() => {
            toggleTheme();
          }}>
          <box-icon name={isDarkMode ? 'sun' : ''} type="solid" size="4vw" color={isDarkMode ? '#FFF' : '#000'} />
          <span className="btn-switch">
            <box-icon name={isDarkMode ? 'moon' : 'sun'} type="solid" size="4vw" color={isDarkMode ? '#FFF' : '#000'} />
          </span>
          <box-icon name={isDarkMode ? '' : 'moon'} type="solid" size="4vw" color={isDarkMode ? '#FFF' : '#000'} />
        </button>
      </div>
    </ThemeProvider>
  );
});
