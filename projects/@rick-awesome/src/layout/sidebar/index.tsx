import { type MetaData } from '@/router/meta-data';
import { genRandomSvg } from '@/utils';
import { isEmpty, startCase, upperCase } from 'lodash';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  logoStyle,
  sideMenuStyle,
  sideTitleStyle,
  sideWrapperStyle,
  sidebarStyle,
} from '../style';

const SideBar = () => {
  const [data, setData] = useState<Record<string, MetaData[]>>();

  useEffect(() => {
    const init = async () => {
      const { metaData } = await import('@/router/meta-data');
      setData(metaData);
    };

    void init();
  }, []);

  return (
    <div css={sidebarStyle}>
      <a css={logoStyle} href="#">
        @RICK.ZHOU
      </a>
      {!isEmpty(data) &&
        Object.entries(data).map(([key, value]) => {
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
