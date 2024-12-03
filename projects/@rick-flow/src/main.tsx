import ReactDOM from 'react-dom/client';
import './index.scss';

import { persistor, store } from '@rickzhou/react-flow/store';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import 'reactflow/dist/style.css';
import { PersistGate } from 'redux-persist/integration/react';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
        // colorBgContainer: '#100C2A'
      },
      // algorithm: theme.defaultAlgorithm,
    }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<div />} />
      </PersistGate>
    </Provider>
  </ConfigProvider>,
);
