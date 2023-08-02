const blogs = import.meta.glob('../../blog/content/*/*.{md,mdx}');

import Article from '@/blog/components/article';
import { capitalize } from 'lodash';
import { type RouteObject } from 'react-router-dom';

export const BlogRoutes: RouteObject = {
  path: import.meta.env.BASE_URL,
  children: Object.entries(blogs).map(([key, value]) => {
    const path = key.split('../blog/content/').at(-1)!.split('.').at(0)!;
    return {
      meta: {
        title: capitalize(path.split('/').at(-1)),
        tag: path.split('/').at(0),
      },
      path,
      async lazy() {
        const { default: Component, frontmatter } =
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          (await value()) as typeof import('README.mdx');

        return {
          Component() {
            return (
              <div>
                <Article>
                  <h1>{frontmatter?.title}</h1>
                  <Component />
                </Article>
              </div>
            );
          },
        };
      },
    };
  }),
};
