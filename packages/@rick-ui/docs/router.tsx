import { materials } from '@/components/materials';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Home from './home';

export const routes: RouteObject[] = [
  {
    path: '',
    element: <Home />,
    children: materials.map(material => {
      return {
        path: material,
        async lazy() {
          const { Demo } = (await import(
            `../components/${material}/demo`
            // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          )) as typeof import('../components/chart/demo/index');
          return {
            Component: Demo,
          };
        },
      };
    }),
  },
];

export const router = createBrowserRouter(routes);
