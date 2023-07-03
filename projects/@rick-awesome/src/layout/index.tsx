import Homepage from '@/homepage';
import { Theme } from '@/theme';
import { Global } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import Content from './content';
import Header from './header';
import SideBar from './sidebar';
import { containerStyle, globalStyle } from './style';
const Home = () => {
  const location = useLocation();

  const renderContent = () => {
    if (location.pathname === import.meta.env.BASE_URL) {
      return <Homepage />;
    }

    return <Content />;
  };

  return (
    <div css={containerStyle}>
      <Theme />
      <Global styles={globalStyle} />
      <SideBar />

      <div className="flex flex-col flex-grow-[1]">
        <Header />
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
