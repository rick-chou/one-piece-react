import Home from '../layout';
import {
  createBrowserRouter,
  redirect,
  type RouteObject,
} from 'react-router-dom';
// import { BlogRoutes } from './blog';
// import { DemoRoutes } from './demo';
// import { RickRoutes } from './rick';

export const routes: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <Home />,
    // children: [DemoRoutes, RickRoutes, BlogRoutes],
  },
  {
    path: '*',
    loader() {
      return redirect(import.meta.env.BASE_URL);
    },
  },
];

export const router = createBrowserRouter(routes);
