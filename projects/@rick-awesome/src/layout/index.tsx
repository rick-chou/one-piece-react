import Homepage from '@/homepage';
import '@/router';
import { Theme } from '@/theme';
import { useLocation } from 'react-router-dom';
import Content from './content';
import Header from './header';
import SideBar from './sidebar';

const Home = () => {
  const location = useLocation();

  const renderContent = () => {
    if (location.pathname === import.meta.env.BASE_URL) {
      return <Homepage />;
    }

    return <Content />;
  };

  return (
    <div className="container">
      <Theme />
      <SideBar />

      <div className="wrapper">
        <Header />
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
