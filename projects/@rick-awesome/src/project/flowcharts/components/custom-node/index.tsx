import { ReadEditorOption } from '@/config/editor';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import Editor from '@monaco-editor/react';
import { presetNode } from '@rick-flow/config';
import { usePreview } from '@rick-flow/hooks/usePreview';
import type { NodeDataType, NodeDataTypeWrapper } from '@rick-flow/interface';
import { NodeType } from '@rick-flow/interface';
import { FlowNodeClassname, NodeWidth, nodeStyle } from '@rick-flow/styles';
import { Alert, Badge, Dropdown, Modal } from 'antd';
import { isEmpty } from 'lodash';
import { memo } from 'react';
import 'react-medium-image-zoom/dist/styles.css';
import type { NodeProps } from 'reactflow';
import { Handle, Position } from 'reactflow';

const getExecutionNode = (data: NodeDataTypeWrapper) =>
  data.executionNodes.find(i => i.id === data.id);

const hasPrefix = (data: NodeDataTypeWrapper) =>
  presetNode.some(i => i.type === data.nodeType && i.icon);

const showCollapse = (data: NodeDataTypeWrapper) =>
  !data.editable && !isEmpty(data.children);

const Prefix: React.FC<{ data: NodeDataType }> = ({ data }) => {
  return presetNode.find(i => i.type === data.nodeType)?.icon;
};

const Elements: React.FC<{
  data: NodeDataTypeWrapper;
  style?: React.CSSProperties;
}> = ({ data, style }) => {
  const node = getExecutionNode(data);
  const { showFlowModal } = usePreview();

  const onClick = (data: NodeDataTypeWrapper) => {
    const node = getExecutionNode(data);
    if (!isEmpty(node) && data.nodeType === NodeType.log) {
      Modal.info({
        icon: null,
        centered: true,
        width: '70%',
        title: null,
        content: (
          <Editor
            options={ReadEditorOption}
            value={''}
            height="50vh"
            width="100%"
          />
        ),
        footer: null,
        maskClosable: true,
        style: { padding: 0 },
      });
    }

    if (data.chartId && data.nodeType === NodeType.flow) {
      showFlowModal({
        id: data.chartId,
        executionNodes: node?.detailPath.executionNodes ?? [],
      });
    }
  };

  return (
    <div>
      <Alert
        type={
          !isEmpty(node) || (!isEmpty(data.executionNodes) && data.root)
            ? 'success'
            : 'info'
        }
        className={FlowNodeClassname}
        data-node-id={`${data.id}`}
        css={nodeStyle}
        description={data.label}
        message={node?.logTime}
        style={style}
        onClick={() => {
          if (!data.editable) {
            onClick(data);
          }
        }}
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const WithCollapse: React.FC<{
  data: NodeDataTypeWrapper;
  style?: React.CSSProperties;
}> = ({ data, style }) => {
  if (showCollapse(data)) {
    const onClick = () => {
      data.onCollapse(data);
    };

    const Icon = data.collapsed ? (
      <MinusCircleTwoTone onClick={onClick} />
    ) : (
      <PlusCircleTwoTone onClick={onClick} />
    );
    return (
      <Badge count={Icon}>
        <Elements data={data} style={style} />
      </Badge>
    );
  }

  return <Elements data={data} style={style} />;
};

const WithDelete: React.FC<{
  data: NodeDataTypeWrapper;
  style?: React.CSSProperties;
}> = ({ data, style = {} }) => {
  const items = [
    {
      key: 'delete',
      danger: true,
      label: (
        <div
          onClick={() => {
            if (data?.editable) {
              data.onDelete?.(data.id);
            }
          }}>
          Delete
        </div>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={data?.editable ? ['contextMenu'] : []}>
      <div>
        <WithCollapse data={data} style={style} />
      </div>
    </Dropdown>
  );
};

const CustomNode = ({ data }: NodeProps<NodeDataTypeWrapper>) => {
  if (hasPrefix(data)) {
    const WithPrefix = () => (
      <Badge.Ribbon text={<Prefix data={data} />} placement="start">
        <WithDelete data={data} style={{ paddingLeft: 20 }} />
      </Badge.Ribbon>
    );

    const node = getExecutionNode(data);

    if ((!isEmpty(data.chartId) || !isEmpty(node)) && !data.editable) {
      return (
        <Badge dot offset={[-NodeWidth, 0]}>
          <WithPrefix />
        </Badge>
      );
    }

    return <WithPrefix />;
  }

  return <WithDelete data={data} />;
};

export default memo(CustomNode);
