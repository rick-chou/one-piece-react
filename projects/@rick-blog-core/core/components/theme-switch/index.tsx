/**
 * @link https://codepen.io/isaaclouzeiro/pen/YzRzmwQ
 */

import { useTheme } from '@//hooks/useTheme';
import { ThemeWrapper } from '@//theme';
import { themeSwitchStyle } from './style';

export type ThemeSwitchProps = {
  className?: string;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className = '' }) => {
  const { toggleTheme } = useTheme();

  return (
    <ThemeWrapper style={themeSwitchStyle}>
      <div className={`theme-switch ${className}`}>
        <button type="button" id="switch" onClick={toggleTheme}>
          <i className="bx bxs-sun"></i>
          <span className="btn-switch"></span>
          <i className="bx bxs-moon"></i>
        </button>
      </div>
    </ThemeWrapper>
  );
};

export default ThemeSwitch;
