import { materials } from '@rickzhou/react-ui/components/materials';
import type { MenuProps } from 'antd';
import { Layout, Menu, Spin } from 'antd';
import startCase from 'lodash-es/startCase';
import React from 'react';
import { Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';

const { Content, Sider, Header } = Layout;

const items: MenuProps['items'] = materials.map(i => {
  return {
    label: startCase(i),
    key: i,
  };
});

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigation = useNavigation();

  return (
    <Layout hasSider>
      <Sider
        theme="light"
        className="!h-screen !fixed !left-0 !top-0 !bottom-0 !overflow-auto shadow-xl rounded-tr-2xl">
        <Menu
          className="h-[70vh] overflow-scroll mt-16"
          theme="light"
          mode="inline"
          items={items}
          selectedKeys={[location.pathname.split('/').at(-1)!]}
          onClick={item => {
            navigate(item.key);
          }}
        />
      </Sider>
      <Layout>
        <Content className="bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="bg-white p-8 ml-56 !min-h-screen shadow-xl rounded-tl-2xl">
            <Spin spinning={navigation.state === 'loading'}>
              <Outlet />
            </Spin>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
