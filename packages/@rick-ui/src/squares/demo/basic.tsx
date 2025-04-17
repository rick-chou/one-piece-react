import { Squares } from '@rickzhou/react-ui';
import { useEffect } from 'react';

const App = () => {
  // DUMI PATCH
  useEffect(() => {
    setTimeout(() => {
      const event = new Event('resize');
      window.dispatchEvent(event);
    }, 300);
  }, []);

  return (
    <div className="h-[200px]">
      <Squares direction="diagonal" />
    </div>
  );
};

export default App;
