import { MDXProvider } from '@mdx-js/react';
import { type FC, type PropsWithChildren } from 'react';
import { codeBlockStyle, codeBtnStyle, codeFilename } from './style';
import './theme.scss';

const Article: FC<PropsWithChildren<{ classname?: string }>> = ({
  children,
  classname = '',
}) => {
  return (
    <div
      className={`px-8 pb-8 prose prose-slate overflow-scroll max-w-[45vw] dark:prose-invert !select-text no-scrollbar ${classname}`}>
      <MDXProvider
        components={{
          a: props => <a target="_blank" {...props} className="italic"></a>,
          pre(props: any) {
            return (
              <div className="not-prose">
                <figure css={codeBlockStyle}>
                  <figcaption>
                    <span css={codeBtnStyle} />
                    <span css={codeBtnStyle} />
                    <span css={codeBtnStyle} />
                    <span css={codeFilename}>
                      {props.filename ??
                        props?.children?.props?.className?.split('-').at(-1)}
                    </span>
                  </figcaption>
                  <pre {...props} className="!bg-[#002b36]"></pre>
                </figure>
              </div>
            );
          },
        }}>
        {children}
      </MDXProvider>
    </div>
  );
};

export default Article;
