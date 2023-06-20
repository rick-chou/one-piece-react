import Home from '@/home';
import ImageConversion from '@/tools/image-conversion';
import { FcEditImage } from 'react-icons/fc';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

export type RouteProps = Omit<RouteObject, 'children'> & {
  children?: RouteProps[];
  icon?: React.ReactNode;
};

export const routes: RouteProps[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <Home />,
    children: [
      // {
      //   path: 'online-zip',
      //   element: <OnlineZip />,
      //   icon: <FileZipTwoTone />,
      // },
      {
        path: 'image-conversion',
        element: <ImageConversion />,
        icon: <FcEditImage />,
        errorElement: <div>ErrorBoundary</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes as RouteObject[]);
