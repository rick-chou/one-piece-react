"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCode = void 0;
const package_json_1 = require("@rickzhou/react-fabric/package.json");
const parser_html_1 = __importDefault(require("prettier/parser-html"));
const parser_markdown_1 = __importDefault(require("prettier/parser-markdown"));
const parser_typescript_1 = __importDefault(require("prettier/parser-typescript"));
const standalone_1 = __importDefault(require("prettier/standalone"));
/**
 * @since 1.0.0
 */
const formatCode = (content, parser = 'typescript') => {
    return standalone_1.default.format(content, {
        ...package_json_1.prettier,
        parser,
        plugins: [parser_typescript_1.default, parser_html_1.default, parser_markdown_1.default],
    });
};
exports.formatCode = formatCode;
