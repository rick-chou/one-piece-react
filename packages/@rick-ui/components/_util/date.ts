import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

type TimePattern = string;

/**
 * @description transform [YYYY-MM-DD HH:mm:ss] to timestamp
 */
export const dateStringToTimestamp = (
  date: string,
  pattern: TimePattern = 'YYYY-MM-DD HH:mm:ss',
): number => {
  return dayjs(date, pattern).valueOf();
};

/**
 * @description transform timestamp to [YYYY-MM-DD HH:mm:ss]
 */
export const timestampToDateString = (
  timestamp: number,
  pattern: TimePattern = 'YYYY-MM-DD HH:mm:ss',
): string => {
  return dayjs(timestamp).format(pattern);
};
