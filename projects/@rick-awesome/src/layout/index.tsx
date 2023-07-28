import CmdModal from '@/components/commands';
import Homepage from '@/homepage';
import { useShortKey } from '@/hooks/useShortkey';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/theme';
import { Global } from '@emotion/react';
import { ConfigProvider, theme } from 'antd';
import { ScrollRestoration, useLocation } from 'react-router-dom';
import Content from './content';
import Header from './header';
import Sidebar from './sidebar';
import { containerStyle, globalStyle } from './style';
const Home = () => {
  const location = useLocation();
  const { dark } = useTheme();
  useShortKey();

  const renderContent = () => {
    if (location.pathname === import.meta.env.BASE_URL) {
      return <Homepage />;
    }

    return <Content />;
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Odibee Sans, Inter, sans-serif',
          // colorBgContainer: dark ? '#000' : '#fff',
        },
        algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}>
      <div css={containerStyle}>
        <Theme />
        <Global styles={globalStyle} />
        <CmdModal />
        <Sidebar />

        <div className="flex flex-col flex-1">
          <Header />
          {renderContent()}
        </div>
      </div>
      <ScrollRestoration />
    </ConfigProvider>
  );
};

export default Home;
