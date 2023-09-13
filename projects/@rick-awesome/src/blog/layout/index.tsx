import { useShortKey } from '@/hooks/useShortkey';
import { useTheme } from '@/hooks/useTheme';
import { useLocation } from 'react-router-dom';
import Content from './content';
import Header from './header';
import Homepage from './homepage';
import Sidebar from './sidebar';
import { containerStyle } from './style';
const Blog = () => {
  const location = useLocation();
  const { fontFamily } = useTheme();
  useShortKey();

  const renderContent = () => {
    if (location.pathname === import.meta.env.BASE_URL) {
      return (
        <div className="flex justify-center overflow-auto">
          <Homepage />
        </div>
      );
    }

    return <Content />;
  };

  return (
    <div css={containerStyle}>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        {renderContent()}
      </div>
    </div>
  );
};

export default Blog;
