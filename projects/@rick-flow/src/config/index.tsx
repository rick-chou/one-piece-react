import { AlertOutlined, BranchesOutlined, FileTextOutlined, PictureOutlined } from '@ant-design/icons';
import CustomEdge from '@rickzhou/react-flow/components/custom-edge';
import CustomNode from '@rickzhou/react-flow/components/custom-node';
import FailBtnEdge from '@rickzhou/react-flow/components/fail-btn-edge';
import { NodeType } from '@rickzhou/react-flow/interface';
import { type editor } from 'monaco-editor';
import type { EdgeTypes, NodeTypes } from 'reactflow';

export const nodeTypes: NodeTypes = {
  custom: CustomNode,
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

export const ReadEditorOption: editor.IStandaloneEditorConstructionOptions = {
  readOnly: true,
  minimap: {
    enabled: false,
  },
  renderFinalNewline: 'off',
  scrollbar: {
    vertical: 'visible',
    horizontal: 'visible',
  },
  mouseWheelZoom: true,
  contextmenu: false,
  fontSize: 12,
  scrollBeyondLastLine: false,
  smoothScrolling: true,
  cursorWidth: 0,
  renderValidationDecorations: 'off',
  colorDecorators: false,
  hideCursorInOverviewRuler: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
};

export const EditEditorOption: editor.IStandaloneEditorConstructionOptions = {
  readOnly: false,
  minimap: {
    enabled: false,
  },
  mouseWheelZoom: true,
  contextmenu: false,
  fontSize: 12,
  scrollBeyondLastLine: false,
  renderValidationDecorations: 'off',
  colorDecorators: false,
  hideCursorInOverviewRuler: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
};
