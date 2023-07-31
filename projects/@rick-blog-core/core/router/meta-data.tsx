import { mainHeaderStyle } from '@/layout/style';
import { first, pick, upperFirst } from 'lodash';
import { useOutletContext, type RouteObject } from 'react-router-dom';

type Component = typeof import('@/components/commands');

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
      path: `${import.meta.env?.BASE_URL}${temp[2]}/${temp[3]}`,
      component: modules[key],
      name: temp[3],
      parent: temp[2],
    };
    if (!metadata[meta.parent]) {
      metadata[meta.parent] = [];
    }

    metadata[meta.parent].push(meta);
  }

  console.log('metadata', metadata);

  return metadata;
}

// const modules = import.meta.glob(['@/!(core)/*/index.tsx']);
const modules = import.meta.glob([]);

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
                      <div css={mainHeaderStyle}>{upperFirst(path)}</div>
                      <Component />
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
