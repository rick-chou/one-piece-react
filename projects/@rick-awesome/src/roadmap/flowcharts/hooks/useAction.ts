import { Action } from '@rick-flow/interface';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const initAction = () =>
  new URLSearchParams(location.search).get('action') ?? Action.add;

export const useAction = () => {
  const [action, setAction] = useState(initAction);
  const { state } = useLocation();

  useEffect(() => {
    setAction(initAction);
  }, [state]);

  return {
    action,
  };
};
