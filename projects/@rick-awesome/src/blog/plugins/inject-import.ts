import * as acorn from 'acorn';

const importStr = "import Codesandbox from '@/blog/components/codesandbox'";

export default function retextSentenceSpacing() {
  return (tree: any, file: any) => {
    tree.children.unshift({
      type: 'mdxjsEsm',
      value: importStr,
      data: {
        estree: acorn.parse(importStr, {
          ecmaVersion: 2020,
          sourceType: 'module',
        }),
      },
    });
  };
}
