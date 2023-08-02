import { RouteObject } from 'react-router-dom';

export type ThemeMode = 'light' | 'dark';

export type RouteProps = Omit<RouteObject, 'children'> & {
  meta: {
    title: string;
    tag: string;
  };
  children?: RouteProps[];
};
