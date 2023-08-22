import { Tabs, TabsProps } from 'antd';
import SplitPane from 'react-split-pane';
import {
  SideInitWidth,
  SideMaxHeight,
  SideMaxWidth,
  SideMinWidth,
} from './config/const';
import Editor from './editor';
import Preview from './preview';
import { defaultTabs } from './setup/defaultTabs';

const items: TabsProps['items'] = defaultTabs.map(i => ({
  key: i.path,
  label: i.path.split('/').at(-1),
  children: <Editor url={i.path} />,
}));

const Repl = () => {
  const onTabChange = () => {};


  window.postMessage({ name: 'rick' });

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <SplitPane
      split="vertical"
      minSize={SideMinWidth}
      maxSize={SideMaxWidth}
      defaultSize={SideInitWidth}
      className="primary">
      <div>
        <Tabs items={items} onChange={onTabChange} />
      </div>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <SplitPane
        split="horizontal"
        minSize={SideMinWidth}
        maxSize={SideMaxHeight}
        defaultSize={SideMaxHeight}>
        <div>
          <Preview />
        </div>
        <div>Debug</div>
      </SplitPane>
    </SplitPane>
  );
};

export default Repl;
