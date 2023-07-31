import { css } from '@emotion/react';
export const ContainerStyles = (visible: boolean) => css`
  transform: translateX(${visible ? 0 : 9999}px);
`;
