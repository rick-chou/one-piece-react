"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyValue = void 0;
const lodash_1 = require("lodash");
/**
 * @since 1.0.0
 */
const isEmptyValue = (value) => {
    if (typeof value === 'object')
        return (0, lodash_1.isEmpty)(value);
    if (typeof value === 'undefined')
        return false;
    if (typeof value === 'boolean')
        return !value;
    return true;
};
exports.isEmptyValue = isEmptyValue;
