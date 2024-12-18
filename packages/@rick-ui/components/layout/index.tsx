import { memoSVC } from '@root/packages/@rick-utils';
import { type PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Content } from './content';
import { Header } from './header';
import { Root } from './root';
import { SideBar } from './sidebar';
import { containerStyle } from './style';

export type LayoutProps = PropsWithChildren;

const LayoutStyleWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LayoutContentStyleWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
`;

const InternalLayout = memoSVC<LayoutProps>(({ children }) => {
  return (
    <LayoutStyleWrapper>
      <div css={containerStyle}>{children}</div>
    </LayoutStyleWrapper>
  );
});

type CompoundedComponent = typeof InternalLayout & {
  Content: typeof Content;
  SideBar: typeof SideBar;
  Header: typeof Header;
  Root: typeof Root;
  ContentWrapper: typeof LayoutContentStyleWrapper;
};

const Layout = InternalLayout as CompoundedComponent;

Layout.ContentWrapper = LayoutContentStyleWrapper;
Layout.Content = Content;
Layout.Root = Root;
Layout.SideBar = SideBar;
Layout.Header = Header;

export default Layout;
