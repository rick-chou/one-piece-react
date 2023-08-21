import { EditorThemeSet } from '@/assets/editor-themes';
import { type CommandItemTypes } from '@/types';
import { type editor } from 'monaco-editor';

export const genCommandItems = () => {
  const commands: CommandItemTypes[] = [];
  commands.push({
    type: 'theme',
    mode: 'title',
    title: 'EditorTheme',
    hotkey: [],
  });
  EditorThemeSet.forEach(theme => {
    commands.push({
      type: 'theme',
      mode: 'item',
      title: theme,
      hotkey: [],
    });
  });
  return commands;
};

export const ReadEditorOpts: editor.IStandaloneEditorConstructionOptions = {
  readOnly: true,
  minimap: {
    enabled: false,
  },
  renderFinalNewline: 'off',
  scrollbar: {
    vertical: 'visible',
    horizontal: 'visible',
  },
  mouseWheelZoom: true,
  contextmenu: false,
  fontSize: 12,
  scrollBeyondLastLine: true,
  smoothScrolling: true,
  cursorWidth: 0,
  renderValidationDecorations: 'off',
  colorDecorators: false,
  hideCursorInOverviewRuler: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
};

export const EditEditorOpts: editor.IStandaloneEditorConstructionOptions = {
  readOnly: false,
  minimap: {
    enabled: false,
  },
  scrollbar: {
    vertical: 'visible',
    horizontal: 'visible',
  },
  mouseWheelZoom: true,
  contextmenu: false,
  fontSize: 12,
  scrollBeyondLastLine: true,
};
