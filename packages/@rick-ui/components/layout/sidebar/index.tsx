import { memoSVC } from '@rickzhou/react-utils';
import { author } from '@root/package.json';
import { isEmpty, startCase, upperCase } from 'lodash-es';
import { Link, type RouteProps } from 'react-router-dom';
import { logoStyle, sideMenuStyle, sideTitleStyle, sideWrapperStyle, sidebarStyle } from '../style';

type SideBarProps = {
  title?: string;
  items?: Record<string, Array<RouteProps>>;
};

export const SideBar = memoSVC<SideBarProps>(({ items, title = author.name }) => {
  return (
    <div css={sidebarStyle}>
      <Link css={logoStyle} to={author.github} target="_blank">
        @{upperCase(title)}
      </Link>
      {!isEmpty(items) &&
        Object.entries(items).map(([key, value]) => {
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
});
