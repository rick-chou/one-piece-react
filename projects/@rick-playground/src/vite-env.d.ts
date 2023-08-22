/// <reference types="vite/client" />

interface Window {
  MonacoEnvironment: {
    getWorker: (_moduleId: unknown, label: string) => Worker;
    monaco: typeof import('monaco-editor');
  };
  ctx: import('./types').StateTypes;
}
