import { useInitFlowcharts } from '@rick-flow/hooks/useInitFlowchart';
import Home from '@rick-flow/views/home';
import { Modal } from 'antd';
import { type ModalStaticFunctions } from 'antd/es/modal/confirm';
import { createContext, type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import 'reactflow/dist/style.css';

type ContextModalType = Omit<ModalStaticFunctions, 'warn'>;

export const ContextModal = createContext<ContextModalType>({} as any);

const RickFlow: FC = () => {
  const location = useLocation();
  const [modal, contextHolder] = Modal.useModal();

  useInitFlowcharts();

  return (
    <ContextModal.Provider value={modal}>
      <div className="rounded-tl-2xl overflow-hidden max-h-[95vh-100px]">
        {location.pathname ===
        `${import.meta.env.BASE_URL}project/flowcharts` ? (
          <Home />
        ) : (
          <Outlet />
        )}
      </div>
      {contextHolder}
    </ContextModal.Provider>
  );
};

export default RickFlow;
