import { TimeStatusChart } from '@rickzhou/react-ui';
import { useSetState } from 'ahooks';
import { Divider, Form, InputNumber, Switch, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { TIME_STATUS_CHART_MOCK } from '../../_util/mock';

type FieldType = {
  showCnt?: boolean;
  showDot?: boolean;
  triggerEvent?: boolean;
  maxSize?: number;
  data: typeof TIME_STATUS_CHART_MOCK;
  isEmpty: boolean;
};

const initProps = {
  showCnt: true,
  showDot: true,
  triggerEvent: true,
  maxSize: 8,
  data: TIME_STATUS_CHART_MOCK,
  isEmpty: false,
};

export const App = () => {
  const [props, setProps] = useSetState<FieldType>(initProps);
  const [form] = useForm<FieldType>();

  return (
    <>
      <Form
        initialValues={initProps}
        layout="inline"
        autoComplete="off"
        form={form}
        onValuesChange={(_, value) => {
          const data = value.isEmpty ? [] : initProps.data;
          setProps({
            ...value,
            data,
          });
        }}>
        <Form.Item<FieldType>
          label="showCnt"
          name="showCnt"
          valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item<FieldType>
          label="showDot"
          name="showDot"
          valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item<FieldType>
          label="triggerEvent"
          name="triggerEvent"
          valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item<FieldType>
          label="isEmpty"
          name="isEmpty"
          valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item<FieldType> label="maxSize" name="maxSize">
          <InputNumber />
        </Form.Item>
      </Form>
      <Divider />
      <div className="text-lg font-black">Camera On</div>
      <TimeStatusChart<{ name: string }>
        {...props}
        triggerEventInfoFn={async params => {
          await message.info(`name : ${params.extra?.name}`);
        }}
      />
    </>
  );
};
