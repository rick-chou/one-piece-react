import { type DatePicker, type FormInstance, type SelectProps } from 'antd';
import { type Dayjs } from 'dayjs';

export type FieldDataType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'time'
  | 'date'
  | 'select';

export type SelectItemDataType = string | number | boolean;

export type OptionDataType =
  | BaseOption
  | TimeDateType
  | DateDateType
  | SelectDateType;

export type BaseOption = {
  type: Exclude<FieldDataType, 'time' | 'date' | 'select'>;
  label?: string;
};

export type SelectDateType = {
  type: 'select';
  options: SelectProps['options'];
  props?: SelectProps;
} & Omit<BaseOption, 'type'>;

export type TimeDateType = {
  type: 'time';
  format?: string;
  props?: typeof DatePicker;
} & Omit<BaseOption, 'type'>;

export type DateDateType = {
  type: 'date';
  format?: string;
  key?: [string, string];
  props?: typeof DatePicker.RangePicker;
} & Omit<BaseOption, 'type'>;

export type FieldType = FieldDataType | OptionDataType;

export type QueryItem = {
  field: string;
  operator: string;
  logicOperator?: string;

  string: string;
  number: number;
  boolean: boolean;
  select: string[] | number[] | string | number;
  time: Dayjs;
  date: [Dayjs, Dayjs];

  value:
    | QueryItem['string']
    | QueryItem['number']
    | QueryItem['boolean']
    | QueryItem['select']
    | QueryItem['time']
    | QueryItem['date'];
};

export type SearchCache = Array<{ count: number; key: string }>;

export type SearchProps = {
  options: Record<string, FieldType>;
  id?: string;
  defaultOperator?: string;
  operator?: string[];
  defaultLogicOperator?: string;
  logicOperator?: string[];
  query?: QueryItem[];
  onSearch?: (query: string, querySet?: QueryItem[]) => void;
};

export type ValueProps = { field?: FieldType };

export type QueryProps = {
  field: string;
  querySet: QueryItem[];
  queryIdx: number;
  queryForm: FormInstance;
  dateType: FieldDataType;
  onFieldChange: (key: string) => void;
  onCancel: () => void;
  onSave: () => void;
} & SearchProps;
