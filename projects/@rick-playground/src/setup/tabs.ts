import { last } from 'lodash';

const defaultContent = import.meta.glob('./default/*.tsx', {
  eager: true,
  as: 'raw',
});

const defaultTabs = Object.entries(defaultContent).map(([path, content]) => {
  return {
    title: `file:///${last(path.split('/'))}`,
    content,
  };
});

console.log('defaultTabs', defaultTabs);

export { defaultTabs };
