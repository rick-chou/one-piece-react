import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { type MenuInfo } from 'rc-menu/lib/interface';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { genSiderItems } from './config/sider';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onSiderSelect = (item: MenuInfo) => {
    navigate(item.key);
  };

  return (
    <div className="toolkit-container">
      <Layout hasSider>
        <Sider
          style={{
            background: "url('/bg.jpg') no-repeat",
            backgroundSize: 'cover',
          }}
          collapsed={false}
          theme="light"
          className="!h-screen !fixed !left-0 !top-0 !bottom-0 !overflow-auto shadow-lg rounded-tr-2xl rounded-br-2xl bg-transparent">
          <div className="p-10">
            <img src="/public/icon-1280.png" className="w-full" />
          </div>
          <Menu
            theme="light"
            mode="inline"
            items={genSiderItems()}
            defaultSelectedKeys={[location.pathname]}
            onClick={item => {
              onSiderSelect(item);
            }}
          />
        </Sider>
        <Layout>
          <Layout.Content className="bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="ml-56 relative">
              {/* <Background /> */}
              <div
                className="bg-white !min-h-[100vh] shadow-lg rounded-tl-2xl rounded-bl-2xl overflow-hidden p-8"
                style={{
                  background: "url('/bg.jpg') no-repeat",
                  backgroundSize: 'cover',
                }}>
                <Outlet />
              </div>
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
