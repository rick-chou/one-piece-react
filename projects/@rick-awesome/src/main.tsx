import '@/config/web-vitals';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import { router } from './router';
import { persistor, store } from './store';

const RickAwesome = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

// const Debug = () => {
//   return <Slider nodes={[RickAwesome, RickAwesome]} />;
// };

ReactDOM.createRoot(document.getElementById('root')!).render(<RickAwesome />);
