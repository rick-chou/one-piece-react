import { type Config as PostcssConfig } from 'postcss-load-config';
import { type Config as TailwindCssConfig } from 'tailwindcss';

declare module '@rickzhou/react-css' {
  export const postcss: PostcssConfig;
  export const tailwindcss: TailwindCssConfig;
  export const emotion: {
    jsxImportSource: string;
    babel: string;
  };
}
