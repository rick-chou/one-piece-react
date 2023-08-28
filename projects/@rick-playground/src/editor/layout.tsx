import { ReplProps } from '@/types';
import SplitPane from 'react-split-pane';
import {
  SideInitWidth,
  SideMaxHeight,
  SideMaxWidth,
  SideMinWidth,
} from '../config/const';
import Preview from '../preview';
import EditorTabs from './tabs';

const EditorLayout: React.FC<ReplProps> = ({ compiler }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <SplitPane
      split="vertical"
      minSize={SideMinWidth}
      maxSize={SideMaxWidth}
      defaultSize={SideInitWidth}
      className="primary">
      <EditorTabs compiler={compiler} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <SplitPane
        split="horizontal"
        minSize={SideMinWidth}
        maxSize={SideMaxHeight}
        defaultSize={SideMaxHeight}>
        <div>
          <Preview compiler={compiler} />
        </div>
        <div>Debug</div>
      </SplitPane>
    </SplitPane>
  );
};

export default EditorLayout;
