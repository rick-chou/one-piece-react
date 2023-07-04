/**
 * @link https://codepen.io/isaaclouzeiro/pen/YzRzmwQ
 */

import { useTheme } from '@/hooks/useTheme';
import './index.scss';

export type ThemeSwitchProps = {
  className?: string;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className = '' }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div
      className={`theme-switch theme-switch--${theme} ${className}`}
      id="theme-switch">
      <button type="button" id="switch" onClick={toggleTheme}>
        <i className="bx bxs-sun"></i>
        <span className="btn-switch"></span>
        <i className="bx bxs-moon"></i>
      </button>
    </div>
  );
};

export default ThemeSwitch;
