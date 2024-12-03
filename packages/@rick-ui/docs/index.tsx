import '@rickzhou/react-ui/docs/index.scss';
import { App, ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const showErrorOverlay = (err: ErrorEvent) => {
  // must be within function call because that's when the element is defined for sure.
  const ErrorOverlay = customElements.get('vite-error-overlay');
  // don't open outside vite environment
  if (!ErrorOverlay) {
    return;
  }

  console.error(err);
  const overlay = new ErrorOverlay(err);
  document.body.appendChild(overlay);
};

window.addEventListener('error', showErrorOverlay);
window.addEventListener('unhandledrejection', ({ reason }) => {
  showErrorOverlay(reason);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
      },
    }}>
    <App>
      <RouterProvider router={router} />
    </App>
  </ConfigProvider>,
);
