import zip from 'jszip';
import { cloneDeep } from 'lodash-es';
import { sortFiles } from './sortFiles';
import { defaultFileTree, type FileObj, type FilePath } from './type';

/**
 * @description transform zip file to FileObj
 * @see FileObj
 */
export const parseZip = async (file: File): Promise<FileObj> => {
  const zipData = await zip.loadAsync(file);
  const fileTree: FileObj['fileTree'] = cloneDeep(defaultFileTree);
  const fileSet: FileObj['fileSet'] = {};

  const buildFileTree = async (
    path: FilePath,
    file: zip.JSZipObject,
    fileTree: FileObj['fileTree'],
    fileSet: FileObj['fileSet'],
  ) => {
    let currentDirectory = fileTree;
    const segments = path.split('/');
    for (const segment of segments) {
      if (!segment) continue;
      let child = currentDirectory.children.find(c => c.title === segment);
      if (!child) {
        child = {
          key: path,
          dir: file.dir,
          title: segment,
          children: [],
        };
        currentDirectory.children.push(child);
      }

      currentDirectory = child;
    }

    if (!file.dir) {
      if (file.name.includes('.zip')) {
        const zipData = await zip.loadAsync(await file.async('blob'));
        zipData.forEach(async (_relativePath, _file) => {
          // remove macos extra file
          if (!_relativePath.includes('__MACOSX') && !_relativePath.includes('.DS_Store')) {
            await buildFileTree(`${file.name}/${_relativePath}`, _file, fileTree, fileSet);
          }
        });
      } else {
        fileSet[currentDirectory.key] = new File([await file.async('arraybuffer')], currentDirectory.title);
        currentDirectory.dir = false;
        currentDirectory.isLeaf = true;
      }
    }
  };

  await Promise.all(
    Object.entries(zipData.files).map(async ([relativePath, file]) => {
      if (!relativePath.startsWith('__MACOSX') && !relativePath.includes('.DS_Store')) {
        await buildFileTree(relativePath, file, fileTree, fileSet);
      }
    }),
  );

  return { fileTree: sortFiles(fileTree), fileSet };
};
