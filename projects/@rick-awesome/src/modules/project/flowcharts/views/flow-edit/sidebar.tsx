import { presetNode } from '@/modules/project/flowcharts/config';
import { useAction } from '@/modules/project/flowcharts/hooks/useAction';
import { useFlowchart } from '@/modules/project/flowcharts/hooks/useFlowchart';
import { useMock } from '@/modules/project/flowcharts/hooks/useMock';
import type { FlowChartType } from '@/modules/project/flowcharts/interface';
import { Action, type NodeType } from '@/modules/project/flowcharts/interface';
import {
  sidebarNodeStyle,
  sidebarNodeWrapperStyle,
} from '@/modules/project/flowcharts/styles';
import { Alert, Badge, Button, Divider, Form, Input, message } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type SidebarProps = {
  editable: boolean;
  onSave: (data: FlowChartType) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ editable, onSave }) => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { action } = useAction();
  const { getFlowchart } = useFlowchart();
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
    <div className="w-[200px] bg-white p-4">
      <div className="mb-4 select-none">
        You can drag these nodes to the pane on the left.
      </div>

      {presetNode.map(i => {
        return (
          <div
            key={i.type}
            css={sidebarNodeWrapperStyle(editable)}
            onDragStart={event => {
              onDragStart(event, i.type);
            }}
            draggable={editable}>
            {i.icon ? (
              <Badge.Ribbon text={i.icon} placement="start">
                <Alert
                  css={sidebarNodeStyle}
                  message={i.type}
                  type={editable ? 'info' : 'error'}
                />
              </Badge.Ribbon>
            ) : (
              <Alert
                css={sidebarNodeStyle}
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
    </div>
  );
};

export default Sidebar;
