/* eslint-disable @typescript-eslint/naming-convention */
import { type SelectProps } from 'antd';
import { first, isEmpty, last, toString, union } from 'lodash';
import {
  type DateDateType,
  type FieldDataType,
  type FieldType,
  type QueryItem,
  type SearchCache,
  type SearchProps,
  type SelectDateType,
  type TimeDateType,
} from './interface';

export const defaultFormat = 'YYYY-MM-DD';

export const operatorOptions: Record<
  string,
  { label: string; unSupport?: FieldDataType[] }
> = {
  '=': {
    label: 'equal to (=)',
    unSupport: ['time'],
  },
  '!=': {
    label: 'not equal to (!=)',
    unSupport: ['time'],
  },
  '^': {
    label: 'contain (^)',
    unSupport: ['time', 'boolean'],
  },
  '!^': {
    label: 'not contain (!^)',
    unSupport: ['time', 'boolean'],
  },
  '>': {
    label: 'greater then (>)',
    unSupport: ['string', 'boolean', 'number'],
  },
  '>=': {
    label: 'greater or equal (>=)',
    unSupport: ['string', 'boolean', 'number'],
  },
  '<': {
    label: 'less then (<)',
    unSupport: ['string', 'boolean', 'number'],
  },
  '<=': {
    label: 'less or equal (<=)',
    unSupport: ['string', 'boolean', 'number'],
  },
  '~': {
    label: 'like (~)',
    unSupport: ['time', 'boolean'],
  },
  '!~': {
    label: 'not like (!~)',
    unSupport: ['time', 'boolean'],
  },
};

export const operatorLogicOptions: Record<string, string> = {
  '&&': 'and (&&)',
  '||': 'or (||)',
};

export const defaultOperators = [
  '=',
  '!=',
  '^',
  '!^',
  '>',
  '>=',
  '<',
  '<=',
  '~',
  '!~',
];

export const defaultLogicOperators = ['&&', '||'];

export const getDataType = (field: FieldType) => {
  if (typeof field === 'string') {
    return field;
  }

  if (isEmpty(field)) {
    return 'string';
  }

  return field.type;
};

export const showErrorMsg = (type: FieldDataType) => {
  switch (type) {
    case 'boolean':
      return 'please select a value';
    case 'number':
      return 'please input a number';
    case 'string':
      return 'please input a value';
    case 'time':
      return 'please select a time';
    default:
  }
};

export const genFieldLabel = (fields: SearchProps['options'], key: string) => {
  const field = fields[key];
  return typeof field === 'object' ? field.label ?? key : key;
};

export const genValue = (
  item: QueryItem,
  fields: SearchProps['options'],
  type: 'display' | 'search' = 'display',
) => {
  const dataType = getDataType(fields[item.field]);
  const filed = fields[item.field];
  const prefix = `${genFieldLabel(fields, item.field)} ${item.operator}`;
  switch (dataType) {
    case 'time':
      return `${prefix} ${item.time.format((filed as TimeDateType).format)}`;
    case 'date':
      return `${prefix} ${first(item.date)!.format(
        (filed as DateDateType).format,
      )} - ${last(item.date)!.format((filed as DateDateType).format)}`;
    case 'select': {
      const select =
        typeof item.select === 'object' ? item.select : [item.select];
      const label = (filed as SelectDateType).options?.filter(i =>
        select.includes(i.value!),
      );
      return `${prefix} ${label!
        .map(i => (type === 'display' ? i.label : i.value))
        .join(',')}`;
    }

    default:
      return `${prefix} ${toString(item[dataType])}`;
  }
};

export const genDisplayOperatorOptions = (
  operator: string[],
  dataType: FieldDataType,
): NonNullable<SelectProps['options']> => {
  const options: SelectProps['options'] = [];
  operator.forEach(i => {
    if (!operatorOptions[i].unSupport?.includes(dataType)) {
      options.push({
        value: i,
        label: operatorOptions[i].label,
        disabled: operatorOptions[i].unSupport?.includes(dataType),
      });
    }
  });
  return options;
};

const cachePrefix = 'search';

export const initCache = (
  fields: Record<string, FieldType>,
  id?: string,
): SearchCache => {
  const initCache = Object.keys(fields).map(i => ({ key: i, count: 0 }));
  if (id) {
    let cache = localStorage.getItem(`${cachePrefix}-${id}`) ?? '';
    if (isEmpty(cache)) {
      cache = JSON.stringify(initCache);
      localStorage.setItem(`${cachePrefix}-${id}`, cache);
    }

    return JSON.parse(cache) as SearchCache;
  }

  return initCache;
};

export const updateCache = (
  fields: Record<string, FieldType>,
  key: string,
  id?: string,
) => {
  if (id) {
    const cache = initCache(fields, id);
    const newCache = cache.map(i => {
      if (i.key === key) {
        return {
          ...i,
          count: i.count + 1,
        };
      }

      return i;
    });
    localStorage.setItem(`search-${id}`, JSON.stringify(newCache));
  }
};

export const genDisplayFieldsOptions = (
  fields: Record<string, FieldType>,
  id?: string,
) => {
  const cache = initCache(fields, id);
  return union(
    cache.sort((i, j) => j.count - i.count).map(i => i.key),
    Object.keys(fields),
  );
};
