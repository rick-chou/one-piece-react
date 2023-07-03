import {
  logoStyle,
  sideMenuStyle,
  sideTitleStyle,
  sideWrapperStyle,
  sidebarStyle,
} from '@/home.style';
import { metaData } from '@/router/meta-data';
import { genRandomSvg } from '@/utils';
import { isEmpty, startCase, upperCase } from 'lodash';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div css={sidebarStyle}>
      <a css={logoStyle} href="#">
        @RICK.ZHOU
      </a>
      {!isEmpty(metaData) &&
        Object.entries(metaData).map(([key, value]) => {
          return (
            <div css={sideWrapperStyle} key={key}>
              <div css={sideTitleStyle}>{upperCase(key)}</div>
              <div css={sideMenuStyle}>
                {value.map(i => (
                  <Link to={i.path} key={i.path}>
                    <div dangerouslySetInnerHTML={{ __html: genRandomSvg() }} />
                    {startCase(i.name)}
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
