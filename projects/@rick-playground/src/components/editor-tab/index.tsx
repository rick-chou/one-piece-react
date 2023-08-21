import { useTabs } from '@/hooks/useTabs';
import {
  EditorTabCloseIconStyle,
  useEditorTabStyle,
  useEditorTabWrapperStyle,
} from '@/styles';
import { CloseOutlined } from '@ant-design/icons';

const Tab = () => {
  const { tabs, updateTabs } = useTabs();
  const editorTabWrapperStyle = useEditorTabWrapperStyle();
  const editorTabStyle = useEditorTabStyle();
  console.log('tabs', tabs)
  return (
    <div css={editorTabWrapperStyle}>
      {tabs.map(i => {
        return (
          <div
            key={i.path}
            data-state={i.active ? 'active' : 'inactive'}
            css={editorTabStyle}
            onClick={() => {
              // updateTabs(i.path);
            }}>
            <span>{i.path.split('/').at(-1)}</span>
            <CloseOutlined
              css={EditorTabCloseIconStyle}
              className="tab-close-icon"
              onClick={e => {
                e.stopPropagation();
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
