import { useTabs } from '@rickzhou/react-editor/hooks/useTabs';
import { EditorTabCloseIconStyle, useEditorTabStyle, useEditorTabWrapperStyle } from '@rickzhou/react-editor/styles';
import { CloseOutlined } from '@ant-design/icons';

const Tab = () => {
  const { tabs, updateTabs } = useTabs();
  const editorTabWrapperStyle = useEditorTabWrapperStyle();
  const editorTabStyle = useEditorTabStyle();
  return (
    <div css={editorTabWrapperStyle}>
      {tabs.map(i => {
        return (
          <div
            key={i.path}
            data-state={i.active ? 'active' : 'inactive'}
            css={editorTabStyle}
            onClick={() => {
              updateTabs(i.path);
            }}>
            <span>{i.path.split('/').at(-1)}</span>
            <CloseOutlined
              css={EditorTabCloseIconStyle}
              className="tab-close-icon"
              onClick={e => {
                e.stopPropagation();
                updateTabs(i.path, true);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
