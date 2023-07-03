import ThemeSwitch from '@/components/theme-switch';
import { GithubOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Divider } from 'antd';
import {
  headerStyle,
  searchBarStyle,
  userImgStyle,
  userNameStyle,
  userStyle,
} from '../style';

const Header = () => (
  <div css={headerStyle}>
    <div css={searchBarStyle}>
      <input type="text" placeholder="Search    [ comming soon ... ]" />
    </div>
    <div css={userStyle}>
      <img
        css={userImgStyle}
        src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/png/2.png"
        alt=""
      />

      <div className="flex cursor-pointer">
        <div css={userNameStyle}>{import.meta.env.RICK_AUTHOR}</div>
        {/* <svg viewBox="0 0 492 492" fill="currentColor">
          <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
        </svg> */}
      </div>

      <Divider
        type="vertical"
        css={css({ background: 'var(--color-secondary-bg)' })}
      />

      <GithubOutlined
        className="cursor-pointer"
        onClick={() => window.open(import.meta.env.RICK_GITHUB)}
      />

      <ThemeSwitch className="scale-[0.2] !w-4 !h-4 ml-8" />

      {/* <div css={notifyStyle}>
        <div css={notificationStyle}></div>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
          />
        </svg>
      </div> */}
    </div>
  </div>
);

export default Header;
