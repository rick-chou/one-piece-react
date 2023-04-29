"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCode = void 0;
const react_fabric_1 = require("@rickzhou/react-fabric");
const parser_html_1 = require("prettier/parser-html");
const parser_markdown_1 = require("prettier/parser-markdown");
const parser_typescript_1 = require("prettier/parser-typescript");
const standalone_1 = require("prettier/standalone");
/**
 * @since 1.0.0
 */
const formatCode = (content, parser = 'typescript') => {
    return standalone_1.default.format(content, {
        ...react_fabric_1.prettier,
        parser,
        plugins: [parser_typescript_1.default, parser_html_1.default, parser_markdown_1.default],
    });
};
exports.formatCode = formatCode;
