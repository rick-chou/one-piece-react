import { presetNode } from '@rickzhou/react-flow/config';
import { useAction } from '@rickzhou/react-flow/hooks/useAction';
import { useFlowchart } from '@rickzhou/react-flow/hooks/useFlowchart';
import { useMock } from '@rickzhou/react-flow/hooks/useMock';
import { useNavigate } from '@rickzhou/react-flow/hooks/useNavigate';
import type { FlowChartType } from '@rickzhou/react-flow/interface';
import { Action, type NodeType } from '@rickzhou/react-flow/interface';
import { SiderbarNodeStyle, SiderbarNodeWrapperStyle } from '@rickzhou/react-flow/styles';
import { Alert, Badge, Button, Card, Divider, Form, Input, message } from 'antd';
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

  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: NodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Card className="h-screen translate-x-5 w-96">
      <div className="mb-4 select-none">You can drag these nodes to the pane on the left.</div>

      {presetNode.map(i => {
        return (
          <SiderbarNodeWrapperStyle
            $editable={editable}
            key={i.type}
            onDragStart={event => {
              onDragStart(event, i.type);
            }}
            draggable={editable}>
            {i.icon ? (
              <Badge.Ribbon text={i.icon} placement="start">
                <SiderbarNodeStyle>
                  <Alert message={i.type} type={editable ? 'info' : 'error'} />
                </SiderbarNodeStyle>
              </Badge.Ribbon>
            ) : (
              <SiderbarNodeStyle>
                <Alert message={i.type} type={editable ? 'info' : 'error'} />
              </SiderbarNodeStyle>
            )}
          </SiderbarNodeWrapperStyle>
        );
      })}

      <Divider />

      <Form form={form} disabled={!editable}>
        <Form.Item label="title" name="title" required rules={[{ required: true, message: 'Please input title' }]}>
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
                await message.success(`${action === Action.edit ? 'Update' : 'Save'} Successful`);
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
