import { type ESLintConfig } from 'eslint-define-config';
import { type Options } from 'prettier';

declare module '@rickzhou/react-fabric' {
  export const prettier: Options;
  export const eslint: ESLintConfig;
}
