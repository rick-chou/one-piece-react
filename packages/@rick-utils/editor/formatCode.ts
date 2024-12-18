import { default as prettierConfig } from '@root/prettier.config.js';
import { type Options, type ParserOptions } from 'prettier';
import parseHtmlPlugin from 'prettier/parser-html';
import parseMdPlugin from 'prettier/parser-markdown';
import parserTypeScriptPlugin from 'prettier/parser-typescript';
import prettier from 'prettier/standalone';

/**
 * @since 1.0.0
 */
export const formatCode = (content: string, parser: ParserOptions['parser'] = 'typescript') => {
  return prettier.format(content, {
    ...(prettierConfig as Options),
    parser,
    plugins: [parserTypeScriptPlugin, parseHtmlPlugin, parseMdPlugin],
  });
};
