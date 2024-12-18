import { memoSVC } from '@root/packages/@rick-utils';
import { type PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Bg } from '../../../assets/pic';

type RootStyleWrapperProps = {
  $background: string;
};

const RootStyleWrapper = styled.div<RootStyleWrapperProps>`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: color-dodge;
  background-image: url(${props => props.$background});
`;

export type RootProps = PropsWithChildren<{
  background?: string;
}>;

export const Root = memoSVC<RootProps>(({ background = Bg, children }) => {
  return <RootStyleWrapper $background={background}>{children}</RootStyleWrapper>;
});
