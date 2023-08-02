import { router } from '@/core/router';
import { persistor, store } from '@/core/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';

const RickBlog = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<RickBlog />);
