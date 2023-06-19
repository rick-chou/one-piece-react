import {
  ActionType,
  initState,
  type ActionTypes,
  type StateTypes,
} from '@/types';
import { sortFiles } from '@rickzhou/react-utils/file';
import {
  createContext,
  useEffect,
  useReducer,
  type Dispatch,
  type PropsWithChildren,
} from 'react';

type ContextTypes = {
  state: StateTypes;
  dispatch: Dispatch<ActionTypes>;
};

export const Context = createContext<ContextTypes>({
  state: initState,
  dispatch: () => null,
});

const logAction = (state: StateTypes, action: ActionTypes) => {
  if (import.meta.env.DEV) {
    console.log(
      `%c🚀 ${action.type}`,
      [
        'color: green',
        'background: yellow',
        'font-size: 12px',
        'border: 1px solid red',
        'border-radius: 10px',
        'padding: 4px',
      ].join(';'),
    );
    console.log({
      action,
      oldState: state,
      newState: { ...state, ...action.payload },
    });
  }
};

const reducer = (state: StateTypes, action: ActionTypes): StateTypes => {
  logAction(state, action);
  switch (action.type) {
    case ActionType.RESET_CTX:
      return initState;
    case ActionType.UPDATE_FILE_TREE:
      return { ...state, fileTree: sortFiles(action.payload.fileTree!) };
    default:
      return { ...state, ...action.payload };
  }
};

const ContextWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    window.ctx = state;
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextWrapper;
