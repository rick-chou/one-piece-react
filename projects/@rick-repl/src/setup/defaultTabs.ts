import { type Tab } from '@/types';
import { last } from 'lodash';

const defaultContent = import.meta.glob('./default/*', {
  eager: true,
  as: 'raw',
});

const defaultTabs: Tab[] = Object.entries(defaultContent).map(
  ([path, content]) => {
    return {
      path: `file:///${last(path.split('/'))!}`,
      content,
    };
  },
);

export { defaultTabs };
