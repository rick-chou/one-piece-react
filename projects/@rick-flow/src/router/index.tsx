import Index from '@/views';
import FlowChart from '@/views/flow';
import Edit from '@/views/flow-edit';
import {
  createBrowserRouter,
  redirect,
  type RouteObject,
} from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: import.meta.env.BASE_URL,
    element: <Index />,
    children: [
      {
        path: 'flow/:id',
        element: <FlowChart />,
      },
      {
        path: 'edit',
        element: <Edit />,
      },
      {
        path: 'edit/:id',
        element: <Edit />,
      },
    ],
  },

  {
    path: '*',
    loader() {
      return redirect('/');
    },
  },
];

export const router = createBrowserRouter(routes);
