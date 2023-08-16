import { lazy } from 'react';
import ReactDOM from 'react-dom/client';

const Repl = lazy(async () => import('@rickzhou/react-playground/Repl'));

ReactDOM.createRoot(document.getElementById('root')!).render(<Repl />);
