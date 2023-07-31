/* eslint-disable @typescript-eslint/no-unsafe-return */
import { DatePicker, Form, Input, InputNumber, Select } from 'antd';
import { toString } from 'lodash';
import { getDataType, showErrorMsg } from './config';
import {
  type DateDateType,
  type SelectDateType,
  type TimeDateType,
  type ValueProps,
} from './interface';

export const Value: React.FC<ValueProps> = ({ field }) => {
  const _String = () => (
    <Form.Item
      name="string"
      label=""
      rules={[{ required: true, message: showErrorMsg('string') }]}>
      <Input style={{ width: '100%' }} placeholder="Filter value" />
    </Form.Item>
  );

  const _Number = () => (
    <Form.Item
      name="number"
      label=""
      rules={[{ required: true, message: showErrorMsg('number') }]}>
      <InputNumber style={{ width: '100%' }} placeholder="Filter value" />
    </Form.Item>
  );

  const _Time = () => (
    <Form.Item
      name="time"
      label=""
      rules={[{ required: true, message: showErrorMsg('time') }]}>
      <DatePicker
        style={{ width: '100%' }}
        {...(field as TimeDateType).props}
      />
    </Form.Item>
  );

  const _Date = () => (
    <Form.Item
      name="date"
      label=""
      rules={[{ required: true, message: showErrorMsg('time') }]}>
      <DatePicker.RangePicker
        style={{ width: '100%' }}
        {...(field as DateDateType).props}
      />
    </Form.Item>
  );

  const _Boolean = () => (
    <Form.Item
      name="boolean"
      label=""
      rules={[{ required: true, message: showErrorMsg('boolean') }]}>
      <Select
        style={{ width: '100%' }}
        showSearch
        placeholder="Filter value"
        options={[true, false].map(i => ({
          value: i,
          label: `${toString(i)}`,
        }))}
      />
    </Form.Item>
  );

  const _Select = () => (
    <Form.Item
      name="select"
      label=""
      rules={[{ required: true, message: showErrorMsg('boolean') }]}>
      <Select
        style={{ width: '100%' }}
        showSearch
        placeholder="Filter value"
        options={(field as SelectDateType).options}
        {...(field as SelectDateType).props}
      />
    </Form.Item>
  );

  if (!field) {
    return <_String />;
  }

  switch (getDataType(field)) {
    case 'boolean':
      return <_Boolean />;
    case 'number':
      return <_Number />;
    case 'date':
      return <_Date />;
    case 'select':
      return <_Select />;
    case 'string':
      return <_String />;
    case 'time':
      return <_Time />;
    default:
      return <_String />;
  }
};
