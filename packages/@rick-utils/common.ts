import { isEmpty } from 'lodash';

/**
 * @since 1.0.0
 */
export const isEmptyValue = (value: any) => {
  if (typeof value === 'string') return !value.trim();
  if (typeof value === 'number') return value === 0;
  if (typeof value === 'boolean') return !value;
  return isEmpty(value);
};
