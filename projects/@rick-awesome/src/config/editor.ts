import { type editor } from 'monaco-editor';

export const ReadEditorOption: editor.IStandaloneEditorConstructionOptions = {
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
  scrollBeyondLastLine: false,
  smoothScrolling: true,
  cursorWidth: 0,
  renderValidationDecorations: 'off',
  colorDecorators: false,
  hideCursorInOverviewRuler: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
};

export const EditEditorOption: editor.IStandaloneEditorConstructionOptions = {
  readOnly: false,
  minimap: {
    enabled: false,
  },
  mouseWheelZoom: true,
  contextmenu: false,
  fontSize: 12,
  scrollBeyondLastLine: false,
  renderValidationDecorations: 'off',
  colorDecorators: false,
  hideCursorInOverviewRuler: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
};
