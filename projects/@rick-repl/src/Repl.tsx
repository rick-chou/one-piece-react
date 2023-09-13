/* eslint-disable @typescript-eslint/ban-ts-comment */
import { App, Spin } from 'antd';
import { useInit } from './hooks/useInit';

import './index.css';

import '@/setup/index';
import SplitPane from 'react-split-pane';
import { SideInitWidth, SideMinWidth } from './config/const';
import Editor from './editor';
import Preview from './preview';

const Repl = () => {
  const { loading, compiler, formatter, linter } = useInit();

  if (loading) {
    return (
      <Spin tip="Init Editor" className="!max-h-none">
        <div className="h-screen" />
      </Spin>
    );
  }

  return (
    <App>
      {/* @ts-expect-error */}
      <SplitPane
        split="vertical"
        minSize={SideMinWidth}
        // maxSize={SideMaxWidth}
        defaultSize={SideInitWidth}>
        <div className="overflow-hidden">
          <Editor compiler={compiler} formatter={formatter} linter={linter} />
        </div>
        <div>
          <Preview compiler={compiler} />
        </div>
      </SplitPane>
    </App>
  );
};

export default Repl;
