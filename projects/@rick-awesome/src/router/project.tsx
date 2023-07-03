import RickImgResize from '@/project/img-resize/index';
import RickFlow from '@rick-flow/index';
import FlowChart from '@rick-flow/views/flow';
import Edit from '@rick-flow/views/flow-edit';
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
      path: 'img-resize',
      element: <RickImgResize />,
    },
  ],
};
