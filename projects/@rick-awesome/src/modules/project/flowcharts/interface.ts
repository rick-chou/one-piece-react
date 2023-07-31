export enum Action {
  add = 'add',
  copy = 'copy',
  edit = 'edit',
}

// TODO
// custom defined
export enum NodeType {
  normal = 'normal',
  log = 'log',
  alert = 'alert',
  flow = 'flow',
  img = 'img',
}

export type NodeDataType = {
  id: number;
  chartId: string;
  label: string;
  branchLabel: string;
  nodeType: NodeType;
  children: number[];
};

export type NodeDataTypeWrapper = {
  root: boolean;
  executionNodes: Execution['executionNodes'];
  editable: boolean;
  collapsed: boolean;
  show: boolean;
  onDelete: (id: number) => void;
  onCollapse: (node: NodeDataTypeWrapper) => void;
} & NodeDataType;

export type FlowChartType = {
  id: string;
  title: string;
  nodes: NodeDataType[];
};

export type Execution = {
  chartId: string;
  executionNodes: Array<{
    logTime: string;
    action: string;
    detailPath: Execution;
    id: number;
  }>;
};

// UTILS
export type TransformFn<T = any> = (data: T) => T;

export const EmptyFn = () => null;
