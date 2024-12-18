import { memoSVC } from '@rickzhou/react-utils';
import Layout from '.';

// TODO layout preset
export const LayoutPro = memoSVC(() => {
  return (
    <Layout.Root>
      <Layout>
        <Layout.SideBar />
        <Layout.ContentWrapper>
          <Layout.Header />
          <Layout.Content></Layout.Content>
        </Layout.ContentWrapper>
      </Layout>
    </Layout.Root>
  );
});
