/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RICK_AUTHOR: string;
  readonly RICK_GITHUB: string;
  readonly RICK_JUEJIN: string;
  readonly RICK_ISSUE: string;
  readonly RICK_AVATAR: string;

  readonly RICK_BG: string;
  readonly RICK_FONTFAMILY: string;
  readonly RICK_CODE_FONTFAMILY: string;
  readonly RICK_OPACITY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
