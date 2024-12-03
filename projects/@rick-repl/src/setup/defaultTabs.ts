import { type Tab } from '@rickzhou/react-repl/types';
import { last } from 'lodash-es';

const defaultContent: Record<string, string> = import.meta.glob('./default/*', {
  eager: true,
  query: 'raw',
  import: 'default',
});

const defaultTabs: Tab[] = Object.entries(defaultContent).map(([path, content]) => {
  return {
    path: `file:///${last(path.split('/'))!}`,
    content,
  };
});

export { defaultTabs };
