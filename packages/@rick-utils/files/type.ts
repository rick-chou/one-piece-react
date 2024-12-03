export type FilePath = string;
export type FileName = string;

export type FileObj = {
  fileTree: FileTreeTypes;
  fileSet: Record<FileName, File>;
};

export type FileTreeTypes = {
  key: FilePath;
  title: FileName;
  dir: boolean;
  isLeaf?: boolean;
  children: FileTreeTypes[];
};

export const defaultFileTree: FileTreeTypes = {
  key: '',
  title: '',
  dir: true,
  children: [],
};
