import { codeFontFamily } from '@/theme';
import { css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { Image } from 'antd';
import { type FC, type PropsWithChildren } from 'react';
import {
  codeBlockStyle,
  codeBtnStyle,
  codeFilename,
  useCodeStyle,
} from './style';

const Article: FC<PropsWithChildren<{ classname?: string }>> = ({
  children,
  classname = '',
}) => {
  const codeStyle = useCodeStyle();
  return (
    <div
      className={`px-8 pb-8 prose prose-slate overflow-auto max-w-[45vw] dark:prose-invert !select-text no-scrollbar ${classname}`}>
      <MDXProvider
        components={{
          a: props => <a target="_blank" {...props} className="italic"></a>,
          pre(props: any) {
            return (
              <div className="not-prose" css={codeStyle}>
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
                  <pre
                    {...props}
                    className="!bg-[#002b36]"
                    css={css({ code: { fontFamily: codeFontFamily } })}></pre>
                </figure>
              </div>
            );
          },
          img: props => <Image src={props.src} />,
        }}>
        {children}
      </MDXProvider>
    </div>
  );
};

export default Article;
