import {
  NodeType,
  type Execution,
  type FlowChartType,
  type NodeDataType,
  type NodeDataTypeWrapper,
  type TransformFn as TransformDataFn,
} from '@/interface';
import { NodeHeight, NodeWidth } from '@/styles';
import dagre from 'dagre';
import { cloneDeep, without } from 'lodash';
import type { Edge, Node } from 'reactflow';
import { Position } from 'reactflow';

export const genNodes = (
  nodes: NodeDataTypeWrapper[],
): Array<Node<NodeDataTypeWrapper>> => {
  return nodes.map(node => {
    return {
      id: `${node.id}`,
      data: node,
      type: 'custom',
      position: { x: 0, y: 0 },
    };
  });
};

export const genEdges = (
  nodes: NodeDataType[],
  executionNodes: Execution['executionNodes'] = [],
): Edge[] => {
  const edges: Edge[] = [];
  nodes.forEach(node => {
    if (node.children.length) {
      node.children.forEach(cId => {
        const isExecutionPath =
          executionNodes.some(i => `${i.id}` === `${node.id}`) &&
          executionNodes.some(i => `${i.id}` === `${cId}`);
        edges.push({
          id: `${node.id}->${cId}`,
          source: `${node.id}`,
          target: `${cId}`,
          label: nodes.find(i => i.id === cId)?.branchLabel,
          animated: isExecutionPath,
          type: 'custom',
          style: {
            strokeWidth: 2,
            stroke: isExecutionPath ? '#1677ff' : '',
          },
        });
      });
    }
  });
  return edges;
};

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction = 'TB',
) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  const _nodes = cloneDeep(nodes);
  const _edges = cloneDeep(edges);
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  _nodes.forEach(node => {
    dagreGraph.setNode(node.id, { width: NodeWidth, height: NodeHeight * 2 });
  });

  _edges.forEach(edge => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  _nodes.forEach(node => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;
    node.position = {
      x: nodeWithPosition.x - NodeWidth / 2,
      y: nodeWithPosition.y - (NodeHeight * 2) / 2,
    };

    return node;
  });

  return { nodes: _nodes, edges: _edges };
};

export const isTree = (_nodes: Node[], _edges: Edge[]) => {
  const nodesIds = [..._nodes].map(i => i.id);
  const edgesIds = new Set<string>();
  const edges = [..._edges];

  edges.forEach(e => {
    edgesIds.add(e.target);
  });

  return without(nodesIds, ...edgesIds).length === 1;
};

export const transformData: TransformDataFn<
  Array<Node<NodeDataType>>
> = nodes => {
  return nodes.map(node => {
    return {
      ...node,
      data: {
        ...node.data,
        chartId: node.data.nodeType === NodeType.flow ? node.data.chartId : '',
      },
    };
  });
};

export const onCollapse = (
  node: NodeDataTypeWrapper,
  nodes: Array<Node<NodeDataTypeWrapper>>,
  nodesSnapshot: Array<Node<NodeDataTypeWrapper>>,
  setNodes: (node: Array<Node<NodeDataTypeWrapper>>) => void,
) => {
  const nodeIdSet = new Set<number>();
  const getNodeId = (ids: number[]) => {
    ids.forEach(i => {
      nodeIdSet.add(i);
      const child = nodesSnapshot.find(n => n.data.id === i);
      if (child?.data.children?.length) {
        getNodeId(child.data.children);
      }
    });
  };

  getNodeId(node.children);

  const _nodeIds = [...nodeIdSet];
  const updateNodes = (_nodes: typeof nodes) => {
    _nodes.forEach(i => {
      if (i.data.id === node.id) {
        i.data.collapsed = !i.data.collapsed;
      }
    });
    setNodes(_nodes);
  };

  if (node.collapsed) {
    const _nodes = nodesSnapshot
      .filter(node => _nodeIds.includes(node.data.id))
      .concat(nodes)
      .map(i => {
        if (_nodeIds.includes(i.data.id)) {
          return { ...i, data: { ...i.data, collapsed: true } };
        }

        return i;
      });
    updateNodes(_nodes);
  } else {
    const _nodes = nodesSnapshot.filter(
      node => !_nodeIds.includes(node.data.id),
    );
    updateNodes(_nodes);
  }
};

export const transformDataFromChart = (_nodes: Node[], _edges: Edge[]) => {
  const data: NodeDataType[] = [];
  _nodes.forEach(node => {
    data.push({
      id: Number(node.id),
      label: node.data.label ?? '',
      branchLabel: node.data.branchLabel ?? '',
      nodeType: node.data.nodeType,
      chartId: node.data.chartId,
      children:
        _edges
          .filter(edge => edge.source === node.id)
          .map(i => Number(i.target)) ?? [],
    });
  });
  return data;
};

export const genChartId = (charts: FlowChartType[]) => {
  return Math.max(...charts.map(i => Number(i.id))) + 1;
};
