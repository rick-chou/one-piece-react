import { type editor } from 'monaco-editor';

export const EDITOR_OPTIONS: editor.IEditorOptions = {
  minimap: {
    enabled: false,
  },
  renderFinalNewline: true,
  scrollbar: {
    vertical: 'auto',
    horizontal: 'auto',
    verticalSliderSize: 4,
    verticalScrollbarSize: 4,
    horizontalScrollbarSize: 4,
    horizontalSliderSize: 4,
  },
  mouseWheelZoom: false,
  contextmenu: true,
  fontSize: 14,
  fontWeight: '500',
  scrollBeyondLastLine: true,
  smoothScrolling: true,
  cursorWidth: 0,
  renderValidationDecorations: 'off',
  colorDecorators: false,
  hideCursorInOverviewRuler: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
  automaticLayout: true,
  lineNumbers: 'on',
  fontFamily: 'Fira Code',
  cursorSmoothCaretAnimation: true,
  renderLineHighlight: 'none',
  cursorBlinking: 'smooth',
  cursorStyle: 'line',
  padding: { top: 8, bottom: 8 },
  lineNumbersMinChars: 4,
  formatOnPaste: true,
  foldingImportsByDefault: true,
  foldingHighlight: true,
  folding: true,
};

export const DIFF_EDITOR_OPTIONS: editor.IDiffEditorOptions = {
  ...EDITOR_OPTIONS,
  renderSideBySide: true,
};
