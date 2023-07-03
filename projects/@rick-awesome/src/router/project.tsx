import RickImgResize from '@/project/img-resize/index';
import RickFlow from '@rick-flow/index';
import FlowChart from '@rick-flow/views/flow';
import Edit from '@rick-flow/views/flow-edit';
import { type RouteObject } from 'react-router-dom';
import { genMetaData } from './meta-data';

const projects = import.meta.glob('../project/*/index.tsx');

export const demoMetaData = await genMetaData(
  projects as Parameters<typeof genMetaData>[0],
);

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
