import { useContext } from '@/hooks/useContext';
import { ActionType, type Tab } from '@/types';
import { last } from 'lodash';
import { useCallback, useMemo } from 'react';

export const useTabs = () => {
  const { state, dispatch } = useContext();

  const updateTabs = (path: Tab['path'], del = false) => {
    let _tabs = [...state.tabs];
  };

  return {
    updateTabs: null,
    tabs: [],
  };
};
