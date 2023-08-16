import ThemeSwitch from '@/components/theme-switch';
import { Hotkey } from '@/config/shortcut';
import { useModalOpen } from '@/hooks/useModalOpen';
import { OpenTypeConfig } from '@/store/slice/modalOpenSlice';
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

const Header = () => {
  const { onShow } = useModalOpen(OpenTypeConfig.CommandOpen);

  return (
    <div css={headerStyle}>
      <div css={searchBarStyle}>
        <input
          type="text"
          readOnly
          placeholder={`Search    [ ${Hotkey.Meta} + ${Hotkey.S} / ${Hotkey.F} ]`}
          onFocus={onShow}
        />
      </div>
      <div css={userStyle}>
        <img css={userImgStyle} src={import.meta.env.RICK_AVATAR} alt="" />

        <div className="flex cursor-pointer">
          <div css={userNameStyle}>{import.meta.env.RICK_AUTHOR}</div>
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
      </div>
    </div>
  );
};

export default Header;
