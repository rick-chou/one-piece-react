import { MDXProvider } from '@mdx-js/react';
import { type FC, type PropsWithChildren } from 'react';

const Article: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="px-8 pb-8 prose prose-slate overflow-y-scroll lg:prose-xl max-w-none dark:prose-invert">
      <MDXProvider
        components={{
          a: props => <a target="_blank" {...props} className="italic"></a>,
        }}>
        {children}
      </MDXProvider>
    </div>
  );
};

export default Article;
