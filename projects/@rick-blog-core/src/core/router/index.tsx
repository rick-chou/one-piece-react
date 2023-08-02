import ErrorPage from '@/core/components/error-page';
import Home from '@/core/layout';
import {
  createBrowserRouter,
  redirect,
  type RouteObject,
} from 'react-router-dom';
import { BlogRoutes } from './blog';

export const routes: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <Home />,
    children: [BlogRoutes],
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
