const blogs = import.meta.glob(['../blog/*/*.{md,mdx}']);
const sidebar = await (await fetch('/blog.md')).text();
const meta = sidebar.split('\n').filter(i => i.includes('['));

import Article from '@/components/article';
import { animationDelay } from '@/layout/style';
import { type RouteObject } from 'react-router-dom';

export const BlogRoutes: RouteObject = {
  path: 'rick/blog',
  children: Object.entries(blogs).map(([key, value]) => {
    return {
      path: key.split('../blog/').at(-1)!.split('.').at(0)!,
      async lazy() {
        const Component =
          // eslint-disable-next-line @typescript-eslint/consistent-type-imports
          ((await value()) as typeof import('@/blog/angular/directive.md'))
            .default;

        return {
          Component() {
            return (
              <div css={animationDelay()}>
                <Article>
                  <h1>
                    {
                      /\[(.*?)\]/
                        .exec(
                          meta.find(i =>
                            i.includes(key.split('../blog/').at(-1)!),
                          )!,
                        )!
                        .at(1)!
                    }
                  </h1>
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
