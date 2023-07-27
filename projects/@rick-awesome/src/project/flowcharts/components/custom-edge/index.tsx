import 'react-medium-image-zoom/dist/styles.css';
import { EdgeLabelRenderer, getBezierPath, type EdgeProps } from 'reactflow';

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  label,
  markerEnd,
  target,
  source,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        data-node-source={source}
        data-node-target={target}
      />
      {/* <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} /> */}
      {label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              fontSize: 12,
              padding: 4,
              background: '#fff',
              pointerEvents: 'all',
            }}
            className="nodrag nopan">
            {label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
