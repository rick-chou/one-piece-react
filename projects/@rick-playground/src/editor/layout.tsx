import { type ReplProps } from '@rickzhou/react-playground/types';
import SplitPane from 'react-split-pane';
import { SideInitWidth, SideMaxWidth, SideMinWidth } from '../config/const';
import Preview from '../preview';
import EditorTabs from './tabs';

const EditorLayout: React.FC<ReplProps> = ({ compiler, formatter, linter }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <SplitPane
      split="vertical"
      minSize={SideMinWidth}
      maxSize={SideMaxWidth}
      defaultSize={SideInitWidth}
      className="primary">
      <EditorTabs compiler={compiler} formatter={formatter} linter={linter} />
      <div>
        <Preview compiler={compiler} />
      </div>
    </SplitPane>
  );
};

export default EditorLayout;
