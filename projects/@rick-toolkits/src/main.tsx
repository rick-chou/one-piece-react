import { router } from '@/router';
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
        colorPrimaryBg: 'transparent',
        colorPrimary: 'transparent',
      },
      // algorithm: theme.darkAlgorithm,
    }}>
    <RouterProvider
      router={router}
      fallbackElement={<div>ErrorBoundary</div>}
    />
  </ConfigProvider>,
);
