import { routes } from '@/router';
import { useEffect, useRef } from 'react';
import { Outlet, matchRoutes, useLocation } from 'react-router-dom';
import { mainContainerStyle } from '../style';

const Content = () => {
  const location = useLocation();
  const currentRoute = matchRoutes(routes, location)?.at(-1)?.route;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div css={mainContainerStyle} ref={ref}>
      <Outlet context={currentRoute?.path} />
    </div>
  );
};

export default Content;
