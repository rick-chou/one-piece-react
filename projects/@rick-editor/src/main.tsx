import { ConfigProvider, theme } from 'antd';
import 'react-contexify/ReactContexify.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import ContextWrapper from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
        colorBgContainer: 'rgb(15,14,14)',
      },
      algorithm: theme.darkAlgorithm,
    }}>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </ConfigProvider>,
);
