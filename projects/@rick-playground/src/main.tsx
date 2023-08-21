import ReactDOM from 'react-dom/client';
import Repl from './Repl';
import ContextWrapper from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextWrapper>
    <Repl />
  </ContextWrapper>,
);
