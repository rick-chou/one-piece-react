import SplitPane from 'react-split-pane';
import {
  SideInitWidth,
  SideMaxHeight,
  SideMaxWidth,
  SideMinWidth,
} from './config/const';

const Repl = () => {
  return (
    // @ts-expect-error
    <SplitPane
      split="vertical"
      minSize={SideMinWidth}
      maxSize={SideMaxWidth}
      defaultSize={SideInitWidth}
      className="primary">
      <div
        onDoubleClick={() => {
          console.log('db');
        }}>
        Editor
      </div>
      {/* @ts-expect-error */}
      <SplitPane
        split="horizontal"
        minSize={SideMinWidth}
        maxSize={SideMaxHeight}
        defaultSize={SideMaxHeight}>
        <div>Preview</div>
        <div>Debug</div>
      </SplitPane>
    </SplitPane>
  );
};

export default Repl;
