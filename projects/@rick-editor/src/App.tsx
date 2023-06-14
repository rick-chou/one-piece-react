import { isEmpty } from 'lodash';
import React from 'react';
import SplitPane from 'react-split-pane';
import Editor from './components/editor';
import FileTree from './components/file-tree';
import Welcome from './components/welcome';
import { SiderInitWidth, SiderMaxWidth, SiderMinWidth } from './config/const';
import { useTabs } from './hooks/useTabs';

const App: React.FC = () => {
  const { tabs } = useTabs();

  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <SplitPane
        split="vertical"
        minSize={SiderMinWidth}
        maxSize={SiderMaxWidth}
        defaultSize={SiderInitWidth}>
        <FileTree />

        {isEmpty(tabs) ? <Welcome /> : <Editor />}
      </SplitPane>
    </div>
  );
};

export default App;
