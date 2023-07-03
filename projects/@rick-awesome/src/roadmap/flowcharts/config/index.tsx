import {
  AlertOutlined,
  BranchesOutlined,
  FileTextOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import CustomEdge from '@rick-flow/components/custom-edge';
import FailBtnEdge from '@rick-flow/components/fail-btn-edge';
import { NodeType } from '@rick-flow/interface';
import type { EdgeTypes, NodeTypes } from 'reactflow';
import customNode from '../components/custom-node';

export const nodeTypes: NodeTypes = {
  custom: customNode,
};

export const edgeTypes: EdgeTypes = {
  failBtnEdge: FailBtnEdge,
  custom: CustomEdge,
};

export const presetNode = [
  {
    type: NodeType.normal,
  },
  {
    type: NodeType.alert,
    icon: <AlertOutlined />,
  },
  {
    type: NodeType.img,
    icon: <PictureOutlined />,
  },
  {
    type: NodeType.log,
    icon: <FileTextOutlined />,
  },
  {
    type: NodeType.flow,
    icon: <BranchesOutlined />,
  },
];
