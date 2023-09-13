import { lazy } from 'react';
import ReactDOM from 'react-dom/client';

const Repl = lazy(async () => import('@/Repl'));

ReactDOM.createRoot(document.getElementById('root')!).render(<Repl />);
