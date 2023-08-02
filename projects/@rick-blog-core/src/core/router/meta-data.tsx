import { RouteProps } from '@/core/interface';
import { BlogRoutes } from '@/core/router/blog';

const sidebar: Record<string, Array<RouteProps>> = {};

BlogRoutes.children?.forEach((i: any) => {
  if (sidebar[i.meta.tag]) {
    sidebar[i.meta.tag].push(i);
  } else {
    sidebar[i.meta.tag] = [i];
  }
});

export { sidebar };
