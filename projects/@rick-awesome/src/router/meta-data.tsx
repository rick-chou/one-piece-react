/* eslint-disable guard-for-in */

import { animationDelay, mainHeaderStyle } from '@/layout/style';
import { css } from '@emotion/react';
import { first, pick, upperFirst } from 'lodash';
import { useOutletContext, type RouteObject } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Component = typeof import('@/demo/clock');

export type MetaData = {
  // full router path
  path: string;
  // component
  component: () => Promise<Component>;
  // component name
  name: string;
  // parent path
  parent: string;
};

export async function genMetaData(
  modules: Record<string, () => Promise<Component>>,
) {
  const metadata: Record<MetaData['parent'], MetaData[]> = {};

  for (const key in modules) {
    const temp = key.split('/');
    const meta: MetaData = {
      path: `${import.meta.env?.BASE_URL}${temp[1]}/${temp[2]}`,
      component: modules[key],
      name: temp[2],
      parent: temp[1],
    };
    if (!metadata[meta.parent]) {
      metadata[meta.parent] = [];
    }

    metadata[meta.parent].push(meta);
  }

  return metadata;
}

const modules = import.meta.glob([
  '../rick/*/index.tsx',
  '../demo/*/index.tsx',
  '../chart/*/index.tsx',
  // '../project/*/index.tsx',
]);

export const metaData = await genMetaData(
  modules as Parameters<typeof genMetaData>[0],
);

export const genRoutes: (path: string) => RouteObject = (path: string) =>
  first(
    Object.entries(pick(metaData, path))?.map(([key, value]) => {
      return {
        path: key,
        children: value.map(i => {
          return {
            path: i.name,
            async lazy() {
              const Component = (await i.component()).default;
              return {
                Component() {
                  const path: string = useOutletContext();
                  return (
                    <div>
                      <div
                        css={css`
                          ${animationDelay(0)};
                          ${mainHeaderStyle}
                        `}>
                        {upperFirst(path)}
                      </div>
                      <div css={animationDelay(0.1)}>
                        <Component />
                      </div>
                    </div>
                  );
                },
              };
            },
          };
        }),
      };
    }),
  ) ?? ([] as RouteObject);
