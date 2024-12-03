import { useInitFlowcharts } from '@rickzhou/react-flow/hooks/useInitFlowchart';
import { Layout, Modal } from 'antd';
import { type ModalStaticFunctions } from 'antd/es/modal/confirm';
import { createContext, type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Home from './home';

const { Content } = Layout;

type ContextModalType = Omit<ModalStaticFunctions, 'warn'>;

export const ContextModal = createContext<ContextModalType>({} as any);

const RickFlow: FC = () => {
  const location = useLocation();
  const [modal, contextHolder] = Modal.useModal();

  useInitFlowcharts();

  return (
    <ContextModal.Provider value={modal}>
      <Layout>
        <Content className="bg-gradient-to-r from-blue-50 to-blue-100">
          <div>
            <div className="bg-white !min-h-screen overflow-hidden">
              {location.pathname === import.meta.env.BASE_URL ? <Home /> : <Outlet />}
            </div>
          </div>
        </Content>

        {contextHolder}
      </Layout>
    </ContextModal.Provider>
  );
};

export default RickFlow;
