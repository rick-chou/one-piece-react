import '@/config/web-vitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import Album from './rick/album/index.react';
import Music from './roadmap/music';
import { router } from './router';
import { persistor, store } from './store';
import Frame from 'react-frame-component'

const RickAwesome = () => {
  return (
    // <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    // </React.StrictMode>
  );
};

const Debug = () => {
  return <Frame style={{width: '1000px',height: '700px'}}><Album /></Frame>
  // return <iframe src='/react-awesome/album/index.html' style={{width: '1000px',height: '700px'}} />
};

ReactDOM.createRoot(document.getElementById('root')!).render(<RickAwesome />);
