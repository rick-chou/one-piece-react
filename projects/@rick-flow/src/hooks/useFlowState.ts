/* eslint-disable @typescript-eslint/no-loop-func */
import {
  NodeType,
  type Execution,
  type NodeDataTypeWrapper,
} from '@/interface';
import { genEdges, genNodes, getLayoutedElements } from '@/utils';
import { sleep } from '@/utils/sleep';
import { cloneDeep } from 'lodash';
import { useEffect, useRef } from 'react';
import {
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
  type ReactFlowInstance,
} from 'reactflow';
import { useFlowchart } from './useFlowchart';

type FlowStateParams = {
  id: string;
  instance: ReactFlowInstance;
  executionNodes?: Execution['executionNodes'];
  editable?: boolean;
  delay?: number;
};

const initNodeId = 1;

const deleteNode = (__nodes: Node[], __edges: Edge[], deleteNodeId: string) => {
  const _nodes = cloneDeep(__nodes);
  const _edges = cloneDeep(__edges);

  const delNodeIds = [deleteNodeId];
  let idx = 0;

  while (delNodeIds[idx]) {
    const edges = _edges.filter(edge => {
      return edge.source === delNodeIds[idx];
    });
    if (edges.length) {
      edges.forEach(i => {
        if (
          _edges
            .filter(e => e.target === i.target)
            .every(i => i.source === delNodeIds[idx])
        ) {
          delNodeIds.push(i.target);
        }
      });
    }

    idx++;
  }

  const delEdgeIds = _edges
    .filter(e => delNodeIds.includes(e.source) || delNodeIds.includes(e.target))
    .map(i => i.id);

  return getLayoutedElements(
    _nodes.filter(i => !delNodeIds.includes(i.id)),
    _edges.filter(i => !delEdgeIds.includes(i.id)),
  );
};

export const useFlowState = ({
  id,
  executionNodes = [],
  instance,
  editable = false,
  delay = 0,
}: FlowStateParams) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeDataTypeWrapper>(
    [],
  );
  const currentNodeId = useRef(initNodeId);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const nodesSnapshot = useRef<typeof nodes>([]);

  const { getFlowchart } = useFlowchart();

  const onCollapse = (node: NodeDataTypeWrapper) => {
    const nodeIdSet = new Set<number>();
    const getNodeId = (ids: number[]) => {
      ids.forEach(i => {
        nodeIdSet.add(i);
        const child = nodesSnapshot.current.find(n => n.data.id === i);
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
      const _nodes = nodesSnapshot.current
        .filter(node => _nodeIds.includes(node.data.id))
        .concat(instance.getNodes())
        .map(i => {
          if (_nodeIds.includes(i.data.id)) {
            return { ...i, data: { ...i.data, collapsed: true } };
          }

          return i;
        });
      updateNodes(_nodes);
    } else {
      const _nodes = nodesSnapshot.current.filter(
        node => !_nodeIds.includes(node.data.id),
      );
      updateNodes(_nodes);
    }
  };

  const onDelete = (id: number) => {
    const { nodes: newNodes, edges: newEdges } = deleteNode(
      instance.getNodes(),
      instance.getEdges(),
      `${id}`,
    );
    setNodes(newNodes);
    setEdges(newEdges);
  };

  const onConnect = ({ target, source }: Connection) => {
    if (target && source) {
      setEdges(eds =>
        addEdge({ id: `${source}-${target}`, source, target }, eds),
      );
    }
  };

  const addNode = (sourceNodeId: number, nodeType = NodeType.normal) => {
    const newNode: Node<Partial<NodeDataTypeWrapper>> = {
      id: `${currentNodeId.current}`,
      type: 'custom',
      position: { x: 0, y: 0 },
      data: {
        label: `${nodeType} node`,
        nodeType,
        id: currentNodeId.current,
        editable: true,
        onDelete,
        executionNodes: [],
      },
    };

    const newEdge = {
      id: `${sourceNodeId}->${currentNodeId.current}`,
      source: `${sourceNodeId}`,
      target: `${currentNodeId.current}`,
    };
    const { nodes: _nodes, edges: _edges } = getLayoutedElements(
      [...nodes, newNode],
      sourceNodeId ? [...instance.getEdges(), newEdge] : instance.getEdges(),
    );
    setNodes(_nodes);
    setEdges(_edges);
    currentNodeId.current += 1;
  };

  const initChart = async (_nodes: NodeDataTypeWrapper[]) => {
    const { nodes, edges } = getLayoutedElements(
      genNodes(
        _nodes.map(i => ({
          ...i,
          onCollapse,
          collapsed: false,
          executionNodes,
          editable,
        })),
      ),
      genEdges(_nodes),
    );
    await sleep(delay);
    setNodes(nodes);
    setEdges(edges);
    nodesSnapshot.current = nodes;
    currentNodeId.current = Math.max(...nodes.map(i => Number(i.id))) + 1;
  };

  useEffect(() => {
    if (id) {
      void initChart(getFlowchart(id).nodes as NodeDataTypeWrapper[]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, instance]);

  return {
    nodes,
    edges,
    setNodes,
    onNodesChange,
    setEdges,
    onEdgesChange,
    onConnect,
    onDelete,
    addNode,
  };
};
