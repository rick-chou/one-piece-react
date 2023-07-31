/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RICK_MODE: 'blog' | 'mixin';
  readonly RICK_AUTHOR: string;
  readonly RICK_GITHUB: string;
  readonly RICK_AVATAR: string;
  readonly RICK_FONTFAMILY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
