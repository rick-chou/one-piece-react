import App from '@/app';
import ErrorPage from '@/components/error-page';
import {
  createBrowserRouter,
  redirect,
  type RouteObject,
} from 'react-router-dom';
import { BlogRoutes } from './blog';
import { ChartRoutes } from './chart';
import { DemoRoutes } from './demo';
import { ProjectRoutes } from './project';
import { RickRoutes } from './rick';

export const routes: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <App />,
    children: [DemoRoutes, RickRoutes, ProjectRoutes, ChartRoutes, BlogRoutes],
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    loader() {
      return redirect(import.meta.env.BASE_URL);
    },
  },
];

export const router = createBrowserRouter(routes);
