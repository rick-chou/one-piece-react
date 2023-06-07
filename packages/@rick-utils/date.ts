import dayjs from 'dayjs';

type TimePattern = string;

/**
 * @description transform [YYYY-MM-DD HH:mm:ss] to timestamp
 * @since 1.0.0
 */
export const dateStringToTimestamp = (
  date: string,
  pattern: TimePattern = 'YYYY-MM-DD HH:mm:ss',
): number => {
  return dayjs(date, pattern).valueOf();
};

/**
 * @description transform timestamp to [YYYY-MM-DD HH:mm:ss]
 * @since 1.0.0
 */
export const timestampToDateString = (
  timestamp: number,
  pattern: TimePattern = 'YYYY-MM-DD HH:mm:ss',
): string => {
  return dayjs(timestamp).format(pattern);
};
