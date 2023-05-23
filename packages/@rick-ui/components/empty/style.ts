import { base64 } from '@/assets';
import { css } from '@emotion/react';

export const EmptyBgStyles = css`
  background: url(${base64.emptyBg}) no-repeat center center;
  min-width: 100%;
  height: 200px;
`;
