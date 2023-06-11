/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
