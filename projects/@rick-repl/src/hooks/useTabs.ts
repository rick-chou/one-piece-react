import { defaultTabs } from '@/setup/defaultTabs';
import { type Tab } from '@/types';
import { useLocalStorageState } from 'ahooks';
import { Uri, editor } from 'monaco-editor';

export const useTabs = () => {
  const [tabs, setTabs] = useLocalStorageState<Tab[]>('tab', {
    defaultValue: defaultTabs,
  });

  const setTabsWrapper = (_tabs: Tab[]) => {
    setTabs(_tabs);
  };

  const updateTab = (
    path: string,
    action: 'add' | 'remove' | 'rename',
    newPath?: string,
  ) => {
    const _tabs = [...(tabs || [])];

    switch (action) {
      case 'add': {
        _tabs.push({ path, content: '' });
        editor.createModel('', undefined, Uri.parse(path));
        break;
      }

      case 'remove': {
        const idx = _tabs.findIndex(i => i.path === path);
        editor.getModel(Uri.parse(_tabs[idx].path))?.dispose();
        _tabs.splice(idx, 1);
        break;
      }

      case 'rename': {
        const idx = _tabs.findIndex(i => i.path === path);
        _tabs.splice(idx, 1, {
          path: newPath!,
          content: editor.getModel(Uri.parse(path))!.getValue(),
        });
        break;
      }

      default:
    }

    setTabs(_tabs);
  };

  return {
    tabs: tabs!,
    setTabs: setTabsWrapper,
    updateTab,
  };
};
