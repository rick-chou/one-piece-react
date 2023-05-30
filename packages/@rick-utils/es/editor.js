import { prettier as prettierConfig } from '@rickzhou/react-fabric/package.json';
import parseHtmlPlugin from 'prettier/parser-html';
import parseMdPlugin from 'prettier/parser-markdown';
import parserTypeScriptPlugin from 'prettier/parser-typescript';
import prettier from 'prettier/standalone';
/**
 * @since 1.0.0
 */
export const formatCode = (content, parser = 'typescript') => {
    return prettier.format(content, {
        ...prettierConfig,
        parser,
        plugins: [parserTypeScriptPlugin, parseHtmlPlugin, parseMdPlugin],
    });
};
