import { type FileTreeTypes } from './type';

const compareFileName = (a: FileTreeTypes, b: FileTreeTypes) => {
  if (a.dir === b.dir) {
    return a.title.localeCompare(b.title);
  }

  return a.dir ? -1 : 1;
};

/**
 * @description sort files by filename
 * @see FileTreeTypes
 */
export const sortFiles = (fileTrees: FileTreeTypes) => {
  fileTrees.children.sort(compareFileName);
  fileTrees.children.forEach(child => {
    if (child.children) {
      sortFiles(child);
    }
  });
  return fileTrees;
};
