import { App, Splitter } from 'antd';
import { isEmpty } from 'lodash-es';
import React from 'react';
import Editor from './components/editor';
import FileTree from './components/file-tree';
import Welcome from './components/welcome';
import { SiderInitWidth, SiderMaxWidth, SiderMinWidth } from './config/const';
import { useTabs } from './hooks/useTabs';

const EditorWrapper: React.FC = () => {
  const { tabs } = useTabs();

  return (
    <App className="h-screen">
      <Splitter>
        <Splitter.Panel defaultSize={SiderInitWidth} max={SiderMaxWidth} min={SiderMinWidth}>
          <FileTree />
        </Splitter.Panel>
        <Splitter.Panel>{isEmpty(tabs) ? <Welcome /> : <Editor />}</Splitter.Panel>
      </Splitter>
    </App>
  );
};

export default EditorWrapper;
