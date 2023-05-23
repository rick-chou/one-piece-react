import { materials } from '@/components/materials';
import type { MenuProps } from 'antd';
import { Avatar, Layout, Menu, Spin } from 'antd';
import startCase from 'lodash/startCase';
import React from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import RainbowText from './rainbow-text';

const { Content, Sider } = Layout;

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

  const renderAvatar = () => {
    return (
      <div className="flex items-center p-4 pb-0 cursor-pointer mt-4">
        <div>
          <Avatar className="bg-yellow-400">RZ</Avatar>
        </div>
        <div className="ml-4 flex-auto">
          <div className="font-medium">Rick Zhou</div>
          <div className="mt-1 text-slate-500 text-xs">
            github.com/rick-chou
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout hasSider>
      <Sider
        theme="light"
        className="!h-screen !fixed !left-0 !top-0 !bottom-0 !overflow-auto shadow-lg rounded-tr-2xl">
        <div
          className="h-8 flex justify-center items-center bg-white m-12 cursor-pointer"
          onClick={() => {
            navigate('/');
          }}>
          <img
            src={'https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/png/1.png'}
            width={'100px'}
          />
        </div>
        <Menu
          className="h-[70vh] overflow-scroll"
          theme="light"
          mode="inline"
          items={items}
          selectedKeys={[location.pathname.split('/').at(-1)!]}
          onClick={item => {
            navigate(item.key);
            console.log(item);
          }}
        />
        <div className="fixed bottom-6" style={{ width: '200px' }}>
          {renderAvatar()}
        </div>
      </Sider>
      <Layout>
        <Content className="bg-gradient-to-r from-blue-50 to-blue-100">
          <div className={'ml-56'}>
            <div className="bg-white !min-h-screen shadow-lg rounded-tl-2xl">
              {location.pathname === '/' ? (
                <div className="flex justify-center items-center h-screen">
                  <RainbowText />
                  <div className="w-[70vw] rounded-lg overflow-hidden">
                    <img
                      src={
                        'https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/jpg/30.jpg'
                      }
                      className="w-[70vw]"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <Spin spinning={navigation.state === 'loading'}>
                    <Outlet />
                  </Spin>
                </div>
              )}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
