import { edgeTypes, nodeTypes } from '@rickzhou/flowcharts/config';
import { useFlowState } from '@rickzhou/flowcharts/hooks/useFlowState';
import { useMock } from '@rickzhou/flowcharts/hooks/useMock';
import type { Execution } from '@rickzhou/flowcharts/interface';
import { flowContainer } from '@rickzhou/flowcharts/styles';
import { Empty } from '@rickzhou/react-ui';
import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import type { ReactFlowInstance } from 'reactflow';
import ReactFlow, { Background, Controls, ReactFlowProvider } from 'reactflow';

const { WithEmpty } = Empty;

type FlowChartProps = {
  id?: string;
  height?: string | number;
  executionNodes?: Execution['executionNodes'];
};

const FlowChart: React.FC<FlowChartProps> = ({
  id: propsId,
  executionNodes = [],
  height = '100vh',
}) => {
  const reactFlowInstance = useRef<ReactFlowInstance>();
  const { id: urlId } = useParams();
  const id = useMemo(() => propsId ?? urlId, [propsId, urlId]);
  const { nodes, edges } = useFlowState({
    id: id!,
    instance: reactFlowInstance.current!,
    executionNodes,
  });

  const { loading, mockLoadingFn } = useMock();

  useEffect(() => {
    if (urlId) {
      void mockLoadingFn();
    }
  }, [urlId, mockLoadingFn]);

  return (
    <WithEmpty data={!loading} emptyProps={{ loading, height: `${height}` }}>
      <div className="flex overflow-hidden">
        <ReactFlowProvider>
          <div css={flowContainer(height)}>
            <ReactFlow
              minZoom={0.1}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              nodes={nodes}
              edges={edges}
              zoomOnDoubleClick={false}
              onInit={instance => {
                reactFlowInstance.current = instance;
              }}
              deleteKeyCode={null}
              nodesDraggable={false}
              proOptions={{ hideAttribution: true }}
              fitView>
              <Controls showInteractive={false} />
              <Background color="#aaa" gap={16} />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </WithEmpty>
  );
};

export default FlowChart;
