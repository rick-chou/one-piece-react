import { useContext } from '@/hooks/useContext';
import { type Tab } from '@/types';

export const useTabs = () => {
  const { state, dispatch } = useContext();

  const updateTabs = (path: Tab['path'], del = false) => {};

  return {
    updateTabs: null,
    tabs: state.tabs.map(i => ({
      ...i,
      active: state.currentFilePath === i.path,
    })),
  };
};
