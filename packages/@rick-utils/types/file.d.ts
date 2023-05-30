type FilePath = string;
type FileName = string;
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
/**
 *
 * @description transform zip file to FileObj
 * @since 1.0.0
 * @see FileObj
 */
export declare const parseZip: (file: File) => Promise<FileObj>;
/**
 *
 * @description transform files to FileObj
 * @since 1.0.0
 * @see FileObj
 *
 */
export declare const parseFiles: (files: File[]) => {
    fileTree: FileTreeTypes;
    fileSet: Record<string, File>;
};
/**
 *
 * @description transform dirHandle to FileObj
 * @since 1.0.0
 *
 * @see FileSystemDirectoryHandle
 * @see FileObj
 */
export declare const parseDir: (dirHandle: FileSystemDirectoryHandle) => Promise<FileObj>;
/**
 *
 * @description sort files by filename
 * @since 1.0.0
 *
 * @see FileTreeTypes
 *
 */
export declare const sortFiles: (fileTrees: FileTreeTypes) => FileTreeTypes;
export {};
