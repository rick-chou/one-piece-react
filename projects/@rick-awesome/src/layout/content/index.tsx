import { routes } from '@/router';
import { Outlet, matchRoutes, useLocation } from 'react-router-dom';

const Content = () => {
  const location = useLocation();
  const currentRoute = matchRoutes(routes, location)?.at(-1)?.route;

  return (
    <div className="main-container">
      <Outlet context={currentRoute?.path} />
    </div>
  );
};

export default Content;
