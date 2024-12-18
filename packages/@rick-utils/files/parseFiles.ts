import { cloneDeep } from 'lodash-es';
import { sortFiles } from './sortFiles';
import { defaultFileTree, type FileObj } from './type';

/**
 * @description transform files to FileObj
 * @see FileObj
 */
export const parseFiles = (files: File[]) => {
  const fileTree: FileObj['fileTree'] = cloneDeep(defaultFileTree);
  const fileSet: FileObj['fileSet'] = {};

  files.forEach(file => {
    fileSet[file.name] = file;
    fileTree.children.push({
      key: file.name,
      title: file.name,
      dir: false,
      children: [],
      isLeaf: true,
    });
  });

  return { fileTree: sortFiles(fileTree), fileSet };
};
