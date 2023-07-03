/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
import { baseUrl } from '@/const';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Component = typeof import('@/roadmap/clock');

export type MetaData = {
  // full router path
  path: string;
  // component
  component: Component;
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
      path: `${import.meta.env?.BASE_URL || baseUrl}${temp[1]}/${temp[2]}`,
      component: await modules[key](),
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
  // '../rick/*/index.tsx',
  '../demo/*/index.tsx',
  // '../project/*/index.tsx',
]);

export const metaData = await genMetaData(
  modules as Parameters<typeof genMetaData>[0],
);
