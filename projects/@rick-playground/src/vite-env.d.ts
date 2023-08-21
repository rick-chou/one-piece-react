/// <reference types="vite/client" />

interface Window {
  MonacoEnvironment: {
    getWorker: (_moduleId: unknown, label: string) => Worker;
  };
  ctx: import('./types').StateTypes;
}
