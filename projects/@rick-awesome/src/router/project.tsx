import RickFlow from '@/modules/project/flowcharts/index';
import FlowChart from '@/modules/project/flowcharts/views/flow';
import Edit from '@/modules/project/flowcharts/views/flow-edit';
import RickImgTransform from '@/modules/project/img-transform/index';
import { type RouteObject } from 'react-router-dom';

export const ProjectRoutes: RouteObject = {
  path: 'project',
  children: [
    {
      path: 'flowcharts',
      element: <RickFlow />,
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
      path: 'img-transform',
      element: <RickImgTransform />,
    },
  ],
};
