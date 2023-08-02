import { isEmpty, startCase, upperCase } from 'lodash';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  logoStyle,
  sideMenuStyle,
  sideTitleStyle,
  sideWrapperStyle,
  sidebarStyle,
} from '../style';

import { sidebar } from '@/core/router/meta-data';

const SideBar = () => {
  return (
    <div css={sidebarStyle}>
      <Link css={logoStyle} to={import.meta.env.BASE_URL}>
        @{upperCase(import.meta.env.RICK_AUTHOR)}
      </Link>
      {!isEmpty(sidebar) &&
        Object.entries(sidebar).map(([key, value]) => {
          return (
            <div css={sideWrapperStyle} key={key}>
              <div css={sideTitleStyle}>{upperCase(key)}</div>
              <div css={sideMenuStyle}>
                {value.map(i => (
                  <Link to={i.path!} key={i.path}>
                    {startCase(i.meta.title)}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default memo(SideBar);
