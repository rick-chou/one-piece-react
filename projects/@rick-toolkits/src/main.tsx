import { router } from '@/router';
import { ConfigProvider } from 'antd';
import 'react-contexify/ReactContexify.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
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
    <RouterProvider router={router} fallbackElement={<ErrorBoundary />} />
  </ConfigProvider>,
);
