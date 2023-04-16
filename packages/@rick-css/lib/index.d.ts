import { Config as PostcssConfig } from 'postcss-load-config';
import { Config as TailwindCssConfig } from 'tailwindcss';

declare module '@rickzhou/react-fabric' {
  export const postcss: PostcssConfig;
  export const tailwindcss: TailwindCssConfig;
  export const emotion: {
    jsxImportSource: string;
    babel: string;
  };
}
