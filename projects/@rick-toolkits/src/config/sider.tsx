import { routes } from '@/router';
import type { MenuProps } from 'antd';
import { first, startCase } from 'lodash';

export const genSiderItems = (): MenuProps['items'] => {
  return first(routes)!.children!.map(i => {
    return {
      key: `${import.meta.env.BASE_URL}${i.path!}`,
      label: startCase(i.path),
      icon: i.icon,
      children: i.children?.map(c => ({
        key: `${import.meta.env.BASE_URL}${i.path!}/${c.path!}`,
        label: startCase(c.path),
      })),
    };
  });
};
