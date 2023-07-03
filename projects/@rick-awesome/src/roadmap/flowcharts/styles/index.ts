import { css } from '@emotion/react';

/**
 * reactflow css
 */
export const FlowNodeClassname = 'custom-flow-node';
export const FlowNodeDragoverClassname = 'flow-node-dragover';
export const FlowContainerClassname = 'react-flow__pane';

/**
 * constant
 */
export const ContainerHeight = '80vh';
export const NodeHeight = 50;
export const NodeWidth = 400;
export const MinimapHeight = 120;
export const HomePreviewHeight = '35vh';

/**
 * UI
 */
export const nodeStyle = css({
  width: NodeWidth,
  minHeight: NodeHeight,
  border: '1px #d9d9d9 solid',
  boxShadow: '0 2px 0 rgba(0, 0, 0, 0.02)',
  borderRadius: '6px',
  color: '#000',
  boxSizing: 'border-box',
  textAlign: 'center',
});

export const siderbarNodeWrapperStyle = (editable: boolean) => css`
  user-select: none;
  cursor: ${editable ? 'grab' : 'not-allowed'};
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  transform: translate(0, 0);
`;

export const siderbarNodeStyle = css({
  width: 250,
  minHeight: NodeHeight / 2,
  border: '1px #d9d9d9 solid',
  boxShadow: '0 2px 0 rgba(0, 0, 0, 0.02)',
  borderRadius: '6px',
  color: '#000',
  boxSizing: 'border-box',
  textAlign: 'center',
  textTransform: 'capitalize',
});

export const flowContainer = (height: string | number) => css`
  width: 100%;
  position: relative;
  height: ${height};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
`;

export const minimapStyle = css({
  height: MinimapHeight,
});
