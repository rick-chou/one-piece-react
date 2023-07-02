import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import { router } from './router';
import { persistor, store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              // fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
              // colorBgContainer: 'rgb(15,14,14)',
            },
            // algorithm: theme.darkAlgorithm,
          }}>
          <RouterProvider router={router} fallbackElement={<div />} />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
