/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Button, Form, Select } from 'antd';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';
import {
  genDisplayFieldsOptions,
  genDisplayOperatorOptions,
  genFieldLabel,
  operatorLogicOptions,
} from './config';
import { type QueryProps } from './interface';
import { cancelBtnStyle, saveBtnStyle } from './style';
import { Value } from './value';

export const Query: React.FC<QueryProps> = ({
  id,
  field,
  queryForm,
  dateType,
  options,
  operator,
  logicOperator = [],
  querySet,
  queryIdx,
  onFieldChange,
  onCancel,
  onSave,
}) => {
  const operatorOptions = genDisplayOperatorOptions(operator!, dateType);
  const currentField = useMemo(() => options[field], [options, field]);
  const fieldOptions = genDisplayFieldsOptions(options, id);

  return (
    <Form style={{ width: '300px' }} form={queryForm} autoComplete="off">
      <Form.Item
        name="field"
        label=""
        rules={[{ required: true, message: 'please select a field' }]}>
        <Select
          placeholder={`${Object.keys(options).length} Field(s)`}
          showSearch
          options={fieldOptions.map(i => ({
            value: i,
            label: genFieldLabel(options, i),
          }))}
          onChange={onFieldChange}
        />
      </Form.Item>
      {!isEmpty(operator) && (
        <Form.Item
          name="operator"
          label=""
          rules={[{ required: true, message: 'please select a operator' }]}>
          <Select
            placeholder={`${Object.keys(operatorOptions).length} Operator(s)`}
            options={operatorOptions}
          />
        </Form.Item>
      )}

      <Value field={currentField} />

      {!isEmpty(logicOperator) && !isEmpty(querySet) && Boolean(queryIdx) && (
        <Form.Item
          name="logicOperator"
          label=""
          rules={[
            { required: true, message: 'please select a logic operator' },
          ]}>
          <Select
            placeholder={`${logicOperator?.length} Logic operator(s)`}
            options={logicOperator.map(i => ({
              value: i,
              label: operatorLogicOptions[i],
            }))}
          />
        </Form.Item>
      )}
      <Form.Item className="mb-0 mt-8">
        <div className="flex justify-between">
          <Button css={cancelBtnStyle} onClick={onCancel}>
            Close
          </Button>
          <Button htmlType="submit" css={saveBtnStyle} onClick={onSave}>
            Save
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
