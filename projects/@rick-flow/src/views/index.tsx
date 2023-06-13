import { useInitFlowcharts } from '@/hooks/useInitFlowchart';
import { Layout, Modal } from 'antd';
import { type ModalStaticFunctions } from 'antd/es/modal/confirm';
import { createContext, type FC } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Home from './home';
import Sign from './sign';

const { Content, Sider } = Layout;

type ContextModalType = Omit<ModalStaticFunctions, 'warn'>;

export const ContextModal = createContext<ContextModalType>({} as any);

const RickFlow: FC = () => {
  const location = useLocation();
  const [modal, contextHolder] = Modal.useModal();
  const navigate = useNavigate();

  useInitFlowcharts();

  return (
    <ContextModal.Provider value={modal}>
      <Layout hasSider>
        <Sider
          collapsed={false}
          theme="light"
          className="!h-screen !fixed  shadow-lg rounded-tr-2xl flex flex-1 justify-center items-center">
          <div
            className="flex h-screen justify-center items-center rotate-90"
            onClick={() => {
              navigate(import.meta.env.BASE_URL);
            }}>
            <Sign />
          </div>
        </Sider>
        <Layout>
          <Content className="bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="ml-56">
              <div className="bg-white !min-h-screen shadow-lg rounded-tl-2xl overflow-hidden">
                {location.pathname === import.meta.env.BASE_URL ? (
                  <Home />
                ) : (
                  <Outlet />
                )}
              </div>
            </div>
          </Content>
        </Layout>

        {contextHolder}
      </Layout>
    </ContextModal.Provider>
  );
};

export default RickFlow;
