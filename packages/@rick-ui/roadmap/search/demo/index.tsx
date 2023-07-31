import DisplayCard from '@/docs/card';
import { Alert } from 'antd';
import Cpn from '..';
import { type SearchProps } from '../interface';

const options: SearchProps['options'] = {
  string: 'string',
  boolean: 'boolean',
  number: 'number',
  'select-single': {
    type: 'select',
    options: [
      { label: 'Option-A', value: 'A' },
      { label: 'Option-B', value: 'B' },
    ],
  },
  'select-multiple': {
    type: 'select',
    options: [
      { label: 'Option-A', value: 'A' },
      { label: 'Option-B', value: 'B' },
    ],
    props: {
      mode: 'tags',
    },
  },
  time: {
    type: 'time',
    format: 'YYYY-MM-DD',
  },
  date: {
    type: 'date',
    format: 'YYYY-MM-DD',
    key: ['start', 'end'],
  },
};

export const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Alert message="Open console to see output" type="info" showIcon />
      <DisplayCard title="Default">
        <Cpn options={options} onSearch={console.log} />
      </DisplayCard>

      <DisplayCard title="Hide Logic Operator">
        <Cpn logicOperator={[]} options={options} onSearch={console.log} />
      </DisplayCard>

      <DisplayCard title="Hide Operator / Logic Operator & Default Operator / Logic Operator">
        <Cpn
          operator={[]}
          logicOperator={[]}
          defaultLogicOperator="&&"
          options={options}
          defaultOperator="="
          onSearch={console.log}
        />
      </DisplayCard>
    </div>
  );
};
