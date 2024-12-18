import { cloneDeep } from 'lodash-es';
import { sortFiles } from './sortFiles';
import { defaultFileTree, type FileObj } from './type';

/**
 * @description transform dirHandle to FileObj
 * @see FileSystemDirectoryHandle
 * @see FileObj
 */
export const parseDir = async (dirHandle: FileSystemDirectoryHandle): Promise<FileObj> => {
  const fileTree: FileObj['fileTree'] = cloneDeep(defaultFileTree);
  const fileSet: FileObj['fileSet'] = {};

  const buildFileTree = async (
    handle: FileSystemDirectoryHandle | FileSystemFileHandle,
    rootDirHandle: FileSystemDirectoryHandle,
    fileTree: FileObj['fileTree'],
    fileSet: FileObj['fileSet'],
  ) => {
    if (handle.name === '.DS_Store') return;
    const path = (await rootDirHandle.resolve(handle))!.join('/');
    let currentDirectory = fileTree;
    const segments = path.split('/');
    for (const segment of segments) {
      if (!segment) continue;
      let child = currentDirectory.children.find(c => c.title === segment);
      if (!child) {
        child = {
          key: path,
          dir: handle.kind === 'directory',
          title: segment,
          children: [],
        };
        currentDirectory.children.push(child);
      }

      currentDirectory = child;
    }

    if (handle.kind === 'directory') {
      for await (const entry of handle.values()) {
        await buildFileTree(entry, rootDirHandle, fileTree, fileSet);
      }
    }

    if (handle.kind === 'file') {
      fileSet[currentDirectory.key] = await handle.getFile();
      currentDirectory.dir = false;
      currentDirectory.isLeaf = true;
    }
  };

  for await (const entry of dirHandle.values()) {
    await buildFileTree(entry, dirHandle, fileTree, fileSet);
  }

  return { fileTree: sortFiles(fileTree), fileSet };
};
