type TimePattern = string;
/**
 * @description transform [YYYY-MM-DD HH:mm:ss] to timestamp
 * @since 1.0.0
 */
export declare const dateStringToTimestamp: (date: string, pattern?: TimePattern) => number;
/**
 * @description transform timestamp to [YYYY-MM-DD HH:mm:ss]
 * @since 1.0.0
 */
export declare const timestampToDateString: (timestamp: number, pattern?: TimePattern) => string;
export {};
