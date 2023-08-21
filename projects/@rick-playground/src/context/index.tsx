import { defaultTabs } from '@/setup/tabs';
import { type ActionTypes, type StateTypes } from '@/types';
import {
  createContext,
  useEffect,
  useReducer,
  type Dispatch,
  type PropsWithChildren,
} from 'react';

export const initState: StateTypes = {
  theme: 'vs-light-rick',
  currentFilePath: '',
  tabs: defaultTabs,
};

type ContextTypes = {
  state: StateTypes;
  dispatch: Dispatch<ActionTypes>;
};

export const Context = createContext<ContextTypes>({
  state: initState,
  dispatch: () => null,
});

const syncLocalSorage = (state: StateTypes) => {
  localStorage.clear();
  localStorage.setItem('state', JSON.stringify(state));
};

const reducer = (state: StateTypes, action: ActionTypes): StateTypes => {
  switch (action.type) {
    default:
      return { ...state, ...action.payload };
  }
};

const ContextWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    syncLocalSorage(state);
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextWrapper;
