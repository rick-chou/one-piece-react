import { Context } from '@/store';
import { ActionType, type Tab } from '@/types';
import { last } from 'lodash';
import { useCallback, useContext, useMemo } from 'react';

export const useTabs = () => {
  const { state, dispatch } = useContext(Context);

  const updateTabs = (path: Tab['path'], del = false) => {
    let _tabs = [...state.tabs];
    let _historyStack = [...state.tabsHistoryStack];

    if (del) {
      _historyStack = _historyStack.filter(i => i !== path);

      const delTabIdx = _tabs.findIndex(i => i.path === path);
      _tabs.splice(delTabIdx, 1);

      if (_tabs.length) {
        _tabs = _tabs.map(i => {
          if (i.path === _historyStack.at(-1)) {
            return { ...i, active: true };
          }

          return { ...i, active: false };
        });
      }

      dispatch({
        type: ActionType.UPDATE_CURRENT_FILE_PATH,
        payload: { currentFilePath: last(_historyStack) },
      });
    } else {
      if (last(state.tabsHistoryStack) !== path) {
        _historyStack.push(path);
      }

      const isNewTab = !_tabs.some(i => i.path === path);
      if (isNewTab) {
        _tabs.push({
          path,
          active: false,
        });
      }

      _tabs = _tabs.map(i => {
        if (i.path === path) {
          return { ...i, active: true };
        }

        return { ...i, active: false };
      });

      dispatch({
        type: ActionType.UPDATE_CURRENT_FILE_PATH,
        payload: { currentFilePath: path },
      });
    }

    dispatch({ type: ActionType.UPDATE_TABS, payload: { tabs: _tabs } });
    dispatch({
      type: ActionType.UPDATE_TABS_HISTORY_STACK,
      payload: { tabsHistoryStack: _historyStack },
    });
  };

  return {
    updateTabs: useCallback(updateTabs, [
      state.tabs,
      state.tabsHistoryStack,
      dispatch,
    ]),
    tabs: useMemo(() => state.tabs, [state.tabs]),
    tabsHistoryStack: useMemo(
      () => state.tabsHistoryStack,
      [state.tabsHistoryStack],
    ),
  };
};
