import { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import ContextWrapper from './context';
import './index.css';

import '@/setup/index';

const Repl = lazy(() => import('@/Repl'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextWrapper>
    <Repl />
  </ContextWrapper>,
);
