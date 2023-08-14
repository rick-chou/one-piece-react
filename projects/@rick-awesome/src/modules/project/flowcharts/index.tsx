import { useInitFlowcharts } from '@rickzhou/flowcharts/hooks/useInitFlowchart';
import Home from '@rickzhou/flowcharts/views/home';
import { type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import 'reactflow/dist/style.css';
import './index.scss';

const RickFlow: FC = () => {
  const location = useLocation();

  useInitFlowcharts();

  return (
    <div className="rounded-2xl overflow-hidden max-h-[95vh-100px]">
      {location.pathname === `${import.meta.env.BASE_URL}project/flowcharts` ? (
        <Home />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default RickFlow;
