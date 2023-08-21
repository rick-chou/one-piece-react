import { Context } from '@/context';
import { useContext as _useContext } from 'react';

export const useContext = () => {
  const { state, dispatch } = _useContext(Context);

  return {
    state,
    dispatch,
  };
};
