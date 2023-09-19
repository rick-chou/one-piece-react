import App from '@/app';
import ErrorPage from '@/components/error-page';
import {
  createBrowserRouter,
  redirect,
  type RouteObject,
} from 'react-router-dom';
import { BlogRoutes } from './blog';
import { genRoutes } from './meta-data';
import { RickRoutes } from './rick';

const DemoRoutes: RouteObject = genRoutes('demo');
const ChartRoutes: RouteObject = genRoutes('chart');
const PreviewRoutes: RouteObject = genRoutes('preview');

export const routes: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <App />,
    children: [DemoRoutes, RickRoutes, ChartRoutes, BlogRoutes, PreviewRoutes],
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
