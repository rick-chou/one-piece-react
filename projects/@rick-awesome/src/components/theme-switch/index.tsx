/**
 * @author
 * @link https://codepen.io/isaaclouzeiro/pen/YzRzmwQ
 */

import { useTheme } from '@/hooks/useTheme';
import { ThemeWrapper } from '@/theme';
import { themeSwitchStyle } from './style';

export type ThemeSwitchProps = {
  className?: string;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className = '' }) => {
  const { toggleThemeMode, dark } = useTheme();

  return (
    <ThemeWrapper style={themeSwitchStyle}>
      <div className={`theme-switch ${className}`}>
        <button
          type="button"
          id="switch"
          onClick={() => {
            toggleThemeMode();
          }}>
          <box-icon
            name={dark ? 'sun' : ''}
            type="solid"
            size="4vw"
            color={dark ? '#FFF' : '#000'}
          />
          <span className="btn-switch">
            <box-icon
              name={dark ? 'moon' : 'sun'}
              type="solid"
              size="4vw"
              color={dark ? '#FFF' : '#000'}
            />
          </span>
          <box-icon
            name={dark ? '' : 'moon'}
            type="solid"
            size="4vw"
            color={dark ? '#FFF' : '#000'}
          />
        </button>
      </div>
    </ThemeWrapper>
  );
};

export default ThemeSwitch;
