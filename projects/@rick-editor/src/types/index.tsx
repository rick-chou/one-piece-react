import { type editor } from 'monaco-editor';

/**
 * Context
 * -------------------------------------------
 */
type FilePath = string;
type FileName = string;

export type FileTreeTypes = {
  key: FilePath;
  title: FileName;
  dir: boolean;
  isLeaf?: boolean;
  children: FileTreeTypes[];
};

export type Tab = {
  path: FilePath;
  active: boolean;
};

export type StateTypes = {
  theme: EditorThemeType;
  currentFilePath: FilePath;
  fileTree: FileTreeTypes;
  fileSet: Record<FileName, File>;
  commandModalOpen: boolean;
  tabs: Tab[];
  tabsHistoryStack: FilePath[];
};

export type ActionTypes = {
  type: ActionType;
  payload: Partial<StateTypes>;
};

export const defaultFileTree: FileTreeTypes = {
  key: '',
  title: '',
  dir: true,
  children: [],
};

export const initState: StateTypes = {
  theme: {
    ...((await import('@rickzhou/react-editor/assets/editor-themes/Amy.json')).default as EditorThemeType),
    name: 'Amy',
  },
  currentFilePath: '',
  fileTree: defaultFileTree,
  fileSet: {},
  commandModalOpen: false,
  tabs: [],
  tabsHistoryStack: [],
};

export enum ActionType {
  'UPDATE_FILE_SET' = 'UPDATE_FILE_SET',
  'UPDATE_FILE_TREE' = 'UPDATE_FILE_TREE',
  'UPDATE_CURRENT_FILE_PATH' = 'UPDATE_CURRENT_FILE_PATH',
  'UPDATE_COMMAND_MODAL_OPEN' = 'UPDATE_COMMAND_MODAL_OPEN',
  'UPDATE_TABS' = 'UPDATE_TABS',
  'UPDATE_TABS_HISTORY_STACK' = 'UPDATE_TABS_HISTORY_STACK',
  'UPDATE_THEME' = 'UPDATE_THEME',
  'RESET_CTX' = 'RESET_CTX',
}

/**
 * Editor
 * -------------------------------------------
 */
export type EditorThemeType = editor.IStandaloneThemeData & {
  name: string;
  colors: {
    [colorId: string]: string;
    'editor.foreground': string;
    'editor.background': string;
    'editor.selectionBackground': string;
    'editor.lineHighlightBackground': string;
    'editorCursor.foreground': string;
    'editorWhitespace.foreground': string;
    'editorIndentGuide.background': string;
    'editorIndentGuide.activeBackground': string;
  };
};

/**
 * Command Modal
 * -------------------------------------------
 */
export type CommandItemTypes = {
  type: 'theme';
  mode: 'item' | 'title';
  title: string;
  hotkey: string[];
};
