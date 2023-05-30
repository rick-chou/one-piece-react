"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestampToDateString = exports.dateStringToTimestamp = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
/**
 * @description transform [YYYY-MM-DD HH:mm:ss] to timestamp
 * @since 1.0.0
 */
const dateStringToTimestamp = (date, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return (0, dayjs_1.default)(date, pattern).valueOf();
};
exports.dateStringToTimestamp = dateStringToTimestamp;
/**
 * @description transform timestamp to [YYYY-MM-DD HH:mm:ss]
 * @since 1.0.0
 */
const timestampToDateString = (timestamp, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return (0, dayjs_1.default)(timestamp).format(pattern);
};
exports.timestampToDateString = timestampToDateString;
