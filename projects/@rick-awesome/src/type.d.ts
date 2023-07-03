declare module 'flipdown';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

export type ThemeMode = 'light' | 'dark';
