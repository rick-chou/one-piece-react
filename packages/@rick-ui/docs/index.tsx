import '@/index.scss';
import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
        },
      }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
);
