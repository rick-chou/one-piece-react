import CmdModal from '@/core/components/commands';
import { useShortKey } from '@/core/hooks/useShortkey';
import { useTheme } from '@/core/hooks/useTheme';
import { Theme, fontFamily } from '@/core/theme';
import { Global } from '@emotion/react';
import { ConfigProvider, theme } from 'antd';
import { ScrollRestoration, useLocation } from 'react-router-dom';
import Content from './content';
import Header from './header';
import Homepage from './homepage';
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
          fontFamily,
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
