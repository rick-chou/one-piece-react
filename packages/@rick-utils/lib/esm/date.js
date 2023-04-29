import dayjs from 'dayjs';
/**
 * @description transform [YYYY-MM-DD HH:mm:ss] to timestamp
 * @since 1.0.0
 */
export const dateStringToTimestamp = (date, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(date, pattern).valueOf();
};
/**
 * @description transform timestamp to [YYYY-MM-DD HH:mm:ss]
 * @since 1.0.0
 */
export const timestampToDateString = (timestamp, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(timestamp).format(pattern);
};
