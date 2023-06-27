/* eslint-disable @typescript-eslint/consistent-type-imports */
import Home from '@/home';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

const modules = import.meta.glob('../demo/**/*.tsx');

export const routes: RouteObject[] = [
  {
    path: '',
    element: <Home />,
    children: Object.entries(modules).map(([key, value]) => {
      return {
        path: key.split('/')!.at(-2),
        async lazy() {
          const Index = (
            (await value()) as typeof import('@/demo/typographic-clock')
          ).default;
          return { Component: Index };
        },
      };
    }),
  },
];

export const router = createBrowserRouter(routes);
