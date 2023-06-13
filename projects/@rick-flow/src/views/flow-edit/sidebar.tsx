import { presetNode } from '@/config';
import { useAction } from '@/hooks/useAction';
import { useFlowchart } from '@/hooks/useFlowchart';
import { useMock } from '@/hooks/useMock';
import { useNavigate } from '@/hooks/useNavigate';
import type { FlowChartType } from '@/interface';
import { Action, type NodeType } from '@/interface';
import { siderbarNodeStyle, siderbarNodeWrapperStyle } from '@/styles';
import {
  Alert,
  Badge,
  Button,
  Card,
  Divider,
  Form,
  Input,
  message,
} from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type SiderbarProps = {
  editable: boolean;
  onSave: (data: FlowChartType) => void;
};

const Siderbar: React.FC<SiderbarProps> = ({ editable, onSave }) => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { action } = useAction();
  const { getFlowchart } = useFlowchart();
  const navigate = useNavigate();
  const { loading, mockLoadingFn } = useMock();

  useEffect(() => {
    if (action === Action.edit) {
      form.setFieldValue('title', getFlowchart(id!)?.title);
    }
  }, [action, id, form, getFlowchart]);

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: NodeType,
  ) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Card className="h-screen translate-x-5 w-96">
      <div className="mb-4 select-none">
        You can drag these nodes to the pane on the left.
      </div>

      {presetNode.map(i => {
        return (
          <div
            key={i.type}
            css={siderbarNodeWrapperStyle(editable)}
            onDragStart={event => {
              onDragStart(event, i.type);
            }}
            draggable={editable}>
            {i.icon ? (
              <Badge.Ribbon text={i.icon} placement="start">
                <Alert
                  css={siderbarNodeStyle}
                  message={i.type}
                  type={editable ? 'info' : 'error'}
                />
              </Badge.Ribbon>
            ) : (
              <Alert
                css={siderbarNodeStyle}
                message={i.type}
                type={editable ? 'info' : 'error'}
              />
            )}
          </div>
        );
      })}

      <Divider />

      <Form form={form} disabled={!editable}>
        <Form.Item
          label="title"
          name="title"
          required
          rules={[{ required: true, message: 'Please input title' }]}>
          <Input placeholder="title" />
        </Form.Item>

        <Divider />

        <Form.Item>
          <Button
            loading={loading}
            disabled={!editable}
            block
            type="primary"
            htmlType="submit"
            onClick={async () => {
              if (form.getFieldValue('title')) {
                await mockLoadingFn();
                onSave(form.getFieldsValue());
                await message.success(
                  `${action === Action.edit ? 'Update' : 'Save'} Successful`,
                );
              }
            }}>
            {action === Action.edit ? 'Update' : 'Save'}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Siderbar;
