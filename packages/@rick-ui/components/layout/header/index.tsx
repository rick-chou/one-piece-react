import { GithubOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { author } from '@root/package.json';
import { memoSVC } from '@root/packages/@rick-utils';
import { Divider } from 'antd';
import { upperCase } from 'lodash-es';
import { Link } from 'react-router-dom';
import { Hotkey } from '../../../_config/hotkey';
import { useCommandsDialogVisible } from '../../commands-dialog/useCommandsDialogVisible';
import Show from '../../show';
import { ThemeSwitch } from '../../theme-switch';
import { headerStyle, logoStyle, searchBarStyle, userImgStyle, userNameStyle, userStyle } from '../style';

type HeaderProps = {
  title?: string;
};

export const Header = memoSVC<HeaderProps>(({ title }) => {
  const { toggle } = useCommandsDialogVisible();

  return (
    <div css={headerStyle}>
      <Show when={!!title}>
        <Link css={logoStyle} style={{ marginRight: '64px' }} to={author.github} target="_blank">
          @{upperCase(title)}
        </Link>
      </Show>
      <div css={searchBarStyle}>
        <input
          type="text"
          readOnly
          placeholder={`Search    [ ${Hotkey.Meta} + ${Hotkey.S} / ${Hotkey.F} ]`}
          onFocus={() => toggle(true)}
        />
      </div>
      <div css={userStyle}>
        <img css={userImgStyle} src={author.avatar} alt="" />

        <div className="flex cursor-pointer">
          <div css={userNameStyle}>{author.name}</div>
        </div>

        <Divider type="vertical" css={css({ background: 'var(--color-secondary-bg)' })} />

        <GithubOutlined className="cursor-pointer" onClick={() => window.open(import.meta.env.RICK_GITHUB)} />

        <ThemeSwitch className="scale-[0.2] !w-4 !h-4 ml-8" />
      </div>
    </div>
  );
});
