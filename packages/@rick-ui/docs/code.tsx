import { type FC, type PropsWithChildren } from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';

const Code: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Markdown
      rehypePlugins={[rehypeHighlight, rehypeMdxCodeProps]}
      remarkPlugins={[remarkGfm, remarkFrontmatter, remarkFrontmatter]}>
      {children as string}
    </Markdown>
  );
};

export default Code;
