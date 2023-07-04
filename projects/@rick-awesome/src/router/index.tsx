import Home from '@/layout';
import {
  createBrowserRouter,
  redirect,
  type RouteObject,
} from 'react-router-dom';
import { DemoRoutes } from './demo';
import { RickRoutes } from './rick';
// import { ProjectRoutes } from './project';

export const routes: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <Home />,
    children: [DemoRoutes, RickRoutes],
  },
  {
    path: '*',
    loader() {
      return redirect(import.meta.env.BASE_URL);
    },
  },
];

export const router = createBrowserRouter(routes);
