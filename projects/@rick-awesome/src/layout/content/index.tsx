import { routes } from '@/router';
import { Outlet, matchRoutes, useLocation } from 'react-router-dom';
import { mainContainerStyle } from '../style';

const Content = () => {
  const location = useLocation();
  const currentRoute = matchRoutes(routes, location)?.at(-1)?.route;

  return (
    <div css={mainContainerStyle}>
      <Outlet context={currentRoute?.path} />
    </div>
  );
};

export default Content;
