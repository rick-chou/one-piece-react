import * as FileIcon from '../FileIcon';
import { FileType, getFileType } from './file-type';

const fileIconEnum = {
  [FileType.File]: <FileIcon.FileIcon />,
  [FileType.JS]: <FileIcon.JavascriptIcon />,
  [FileType.TS]: <FileIcon.TypeScriptDefIcon />,
  [FileType.TS_DEF]: <FileIcon.TypeScriptDefIcon />,
  [FileType.React]: <FileIcon.ReactIcon />,
  [FileType.React_TS]: <FileIcon.ReactTsIcon />,
  [FileType.JSON]: <FileIcon.JsonIcon />,
  [FileType.HTML]: <FileIcon.HtmlIcon />,
  [FileType.README]: <FileIcon.ReadmeIcon />,
  [FileType.MD]: <FileIcon.MarkdownIcon />,
  [FileType.IMG]: <FileIcon.ImageIcon />,
  [FileType.LOG]: <FileIcon.LogIcon />,
  [FileType.ZIP]: <FileIcon.ZipIcon />,
  [FileType.PDF]: <FileIcon.PdfIcon />,
  [FileType.SVG]: <FileIcon.SvgIcon />,
  [FileType.YARN]: <FileIcon.YarnIcon />,
  [FileType.CSS]: <FileIcon.CssIcon />,
  [FileType.SCSS]: <FileIcon.ScssIcon />,
  [FileType.LESS]: <FileIcon.LessIcon />,
  [FileType.STYLUS]: <FileIcon.StylusIcon />,
  [FileType.JEST]: <FileIcon.JestIcon />,
  [FileType.BABEL]: <FileIcon.BabelIcon />,
  [FileType.ESLINT]: <FileIcon.EslintIcon />,
  [FileType.VITE]: <FileIcon.ViteIcon />,
};

export const getFileIcon = (
  fileName: string,
  isDir: boolean,
  isExpanded: boolean,
) => {
  if (isDir) {
    if (fileName.toLowerCase() === 'components') {
      return <FileIcon.FolderComponentsIcon />;
    }

    return isExpanded ? (
      <FileIcon.FolderOpenIcon />
    ) : (
      <FileIcon.FolderCloseIcon />
    );
  }

  return fileIconEnum[getFileType(fileName)];
};
