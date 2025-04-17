/**
 * @link https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=21124
 */

import Babel from './icon/babel.svg';
import BrowserList from './icon/browserList.svg';
import Changelog from './icon/changelog.svg';
import Css from './icon/css.svg';
import Eslint from './icon/eslint.svg';
import File from './icon/file.svg';
import FolderClose from './icon/folder-close.svg';
import FolderComponents from './icon/folder-components.svg';
import FolderOpen from './icon/folder-open.svg';
import Gulp from './icon/gulp.svg';
import Html from './icon/html.svg';
import Image from './icon/image.svg';
import Javascript from './icon/javascript.svg';
import Jest from './icon/jest.svg';
import Json from './icon/json.svg';
import Less from './icon/less.svg';
import Vite from './icon/lightning.svg';
import Lock from './icon/lock.svg';
import Log from './icon/log.svg';
import Markdown from './icon/markdown.svg';
import Pdf from './icon/pdf.svg';
import Postcss from './icon/postcss.svg';
import React from './icon/react.svg';
import ReactTs from './icon/react_ts.svg';
import Readme from './icon/readme.svg';
import { default as Sass, default as Scss } from './icon/sass.svg';
import Stylus from './icon/stylus.svg';
import Svg from './icon/svg.svg';
import Tailwindcss from './icon/tailwindcss.svg';
import TestJs from './icon/test-js.svg';
import TestTs from './icon/test-ts.svg';
import TypeScriptDef from './icon/typescript-def.svg';
import Typescript from './icon/typescript.svg';
import Video from './icon/video.svg';
import Xml from './icon/xml.svg';
import Yarn from './icon/yarn.svg';
import Zip from './icon/zip.svg';

export type FileIconProps = {
  style?: React.CSSProperties;
};

const Icon: React.FC<{ path: string } & FileIconProps> = ({ path, style }) => {
  return <img src={path} className="h-4 w-4" style={style} />;
};

export const BabelIcon: React.FC<FileIconProps> = props => (
  <Icon path={Babel} {...props} />
);
export const FileIcon: React.FC<FileIconProps> = props => (
  <Icon path={File} {...props} />
);
export const FolderOpenIcon: React.FC<FileIconProps> = props => (
  <Icon path={FolderOpen} {...props} />
);
export const FolderCloseIcon: React.FC<FileIconProps> = props => (
  <Icon path={FolderClose} {...props} />
);
export const FolderComponentsIcon: React.FC<FileIconProps> = props => (
  <Icon path={FolderComponents} {...props} />
);
export const HtmlIcon: React.FC<FileIconProps> = props => (
  <Icon path={Html} {...props} />
);
export const JavascriptIcon: React.FC<FileIconProps> = props => (
  <Icon path={Javascript} {...props} />
);
export const JsonIcon: React.FC<FileIconProps> = props => (
  <Icon path={Json} {...props} />
);
export const LogIcon: React.FC<FileIconProps> = props => (
  <Icon path={Log} {...props} />
);
export const ReactTsIcon: React.FC<FileIconProps> = props => (
  <Icon path={ReactTs} {...props} />
);
export const ReactIcon: React.FC<FileIconProps> = props => (
  <Icon path={React} {...props} />
);
export const SassIcon: React.FC<FileIconProps> = props => (
  <Icon path={Sass} {...props} />
);
export const StylusIcon: React.FC<FileIconProps> = props => (
  <Icon path={Stylus} {...props} />
);
export const TypescriptIcon: React.FC<FileIconProps> = props => (
  <Icon path={Typescript} {...props} />
);
export const VideoIcon: React.FC<FileIconProps> = props => (
  <Icon path={Video} {...props} />
);
export const XmlIcon: React.FC<FileIconProps> = props => (
  <Icon path={Xml} {...props} />
);
export const YarnIcon: React.FC<FileIconProps> = props => (
  <Icon path={Yarn} {...props} />
);
export const ZipIcon: React.FC<FileIconProps> = props => (
  <Icon path={Zip} {...props} />
);
export const PdfIcon: React.FC<FileIconProps> = props => (
  <Icon path={Pdf} {...props} />
);
export const TestJsIcon: React.FC<FileIconProps> = props => (
  <Icon path={TestJs} {...props} />
);
export const TestTsIcon: React.FC<FileIconProps> = props => (
  <Icon path={TestTs} {...props} />
);
export const TailwindcssIcon: React.FC<FileIconProps> = props => (
  <Icon path={Tailwindcss} {...props} />
);
export const PostcssIcon: React.FC<FileIconProps> = props => (
  <Icon path={Postcss} {...props} />
);
export const MarkdownIcon: React.FC<FileIconProps> = props => (
  <Icon path={Markdown} {...props} />
);
export const ImageIcon: React.FC<FileIconProps> = props => (
  <Icon path={Image} {...props} />
);
export const EslintIcon: React.FC<FileIconProps> = props => (
  <Icon path={Eslint} {...props} />
);
export const GulpIcon: React.FC<FileIconProps> = props => (
  <Icon path={Gulp} {...props} />
);
export const CssIcon: React.FC<FileIconProps> = props => (
  <Icon path={Css} {...props} />
);
export const BrowserListIcon: React.FC<FileIconProps> = props => (
  <Icon path={BrowserList} {...props} />
);
export const ChangelogIcon: React.FC<FileIconProps> = props => (
  <Icon path={Changelog} {...props} />
);
export const LessIcon: React.FC<FileIconProps> = props => (
  <Icon path={Less} {...props} />
);
export const JestIcon: React.FC<FileIconProps> = props => (
  <Icon path={Jest} {...props} />
);
export const ReadmeIcon: React.FC<FileIconProps> = props => (
  <Icon path={Readme} {...props} />
);
export const LockIcon: React.FC<FileIconProps> = props => (
  <Icon path={Lock} {...props} />
);
export const SvgIcon: React.FC<FileIconProps> = props => (
  <Icon path={Svg} {...props} />
);
export const TypeScriptDefIcon: React.FC<FileIconProps> = props => (
  <Icon path={TypeScriptDef} {...props} />
);
export const ScssIcon: React.FC<FileIconProps> = props => (
  <Icon path={Scss} {...props} />
);
export const ViteIcon: React.FC<FileIconProps> = props => (
  <Icon path={Vite} {...props} />
);
