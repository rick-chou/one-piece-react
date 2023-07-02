import { logoStyle, sidebarStyle } from '@/home.style';
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
            <div className="side-wrapper" key={key}>
              <div className="side-title">{upperCase(key)}</div>
              <div className="side-menu">
                {value.map(i => (
                  <Link
                    className="sidebar-link discover is-active"
                    to={i.path}
                    key={i.path}>
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
