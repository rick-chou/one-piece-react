import type { EdgeProps } from 'reactflow';
import { getBezierPath } from 'reactflow';

const foreignObjectSize = 40;

const FailBtnEdge = (props: EdgeProps) => {
  const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd } = props;
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
      <path id={id} style={style} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd as string} />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        className="fail-button-edge">
        <div>
          <button className="edgebutton">x</button>
        </div>
      </foreignObject>
    </>
  );
};

export default FailBtnEdge;
