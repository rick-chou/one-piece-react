import { materials } from '@rickzhou/react-ui/components/materials';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Home from './home';

export const routes: RouteObject[] = [
  {
    path: '',
    element: <Home />,
    children: materials.map(material => {
      return {
        path: material,
      };
    }),
  },
];

export const router = createBrowserRouter(routes);
