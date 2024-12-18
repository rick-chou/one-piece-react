import { Layout, Markdown } from '@rickzhou/react-ui';
import React from 'react';
import { name } from '../package.json';
import README from './README.mdx';

const Home: React.FC = () => {
  return (
    <Layout.Root>
      <Layout>
        {/* <Layout.SideBar title={name} /> */}
        <Layout.ContentWrapper>
          <Layout.Header title={name} />
          <Layout.Content>
            <Markdown>
              <README />
            </Markdown>
          </Layout.Content>
        </Layout.ContentWrapper>
      </Layout>
    </Layout.Root>
  );
};

export default Home;
