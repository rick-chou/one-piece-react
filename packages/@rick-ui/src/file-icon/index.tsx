import * as InternalFileIcon from './FileIcon';
import { getFileIcon } from './utils/file-icon';
import { getFileLanguage } from './utils/file-language';
import { getFileType } from './utils/file-type';

export type { FileIconProps } from './FileIcon';

type InternalFileIconType = typeof InternalFileIcon;

type CompoundedComponent = InternalFileIconType & {
  getFileIcon: typeof getFileIcon;
  getFileLanguage: typeof getFileLanguage;
  getFileType: typeof getFileType;
};

const FileIcon = { ...InternalFileIcon } as CompoundedComponent;

FileIcon.getFileIcon = getFileIcon;
FileIcon.getFileLanguage = getFileLanguage;
FileIcon.getFileType = getFileType;

export default FileIcon;
