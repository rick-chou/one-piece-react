import DOMPurify from 'dompurify';
import type { FC } from 'react';

export type LinkTextProps = {
  text: string;
};

const isUrlReg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;

const urlPipe = (text: string) => {
  return text.replace(
    isUrlReg,
    url =>
      `<a href=${url} target="_blank" rel="noreferrer" class="underline text-blue-500 italic cursor-pointer font-medium">${url}</a>`,
  );
};

const LinkText: FC<LinkTextProps> = ({ text }) => {
  const _text = urlPipe(text);

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(_text, {
          ALLOWED_ATTR: ['target', 'href', 'class', 'rel'],
        }),
      }}
    />
  );
};

export default LinkText;
