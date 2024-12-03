import { CodeSandboxOutlined } from '@ant-design/icons';
import { Context } from '@rickzhou/react-editor/store';
import { useWelcomeStyle } from '@rickzhou/react-editor/styles';
import { ActionType } from '@rickzhou/react-editor/types';
import { parseFiles } from '@rickzhou/react-utils';
import { Button } from 'antd';
import { useContext } from 'react';
import packageJson from '../../../package.json';

const Welcome = () => {
  const style = useWelcomeStyle();
  const { dispatch } = useContext(Context);

  const mockFile = () => {
    const { fileSet, fileTree } = parseFiles([
      new File([JSON.stringify(packageJson, null, 2)], `${packageJson.name}.json`, {
        type: 'text/plain',
      }),
    ]);
    dispatch({ type: ActionType.RESET_CTX, payload: {} });
    dispatch({ type: ActionType.UPDATE_FILE_SET, payload: { fileSet } });
    dispatch({ type: ActionType.UPDATE_FILE_TREE, payload: { fileTree } });
  };

  return (
    <div css={style}>
      <div>
        <img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/webp/js.webp" />
        <img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/webp/react.webp" />
        <img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/webp/vscode.webp" />
      </div>
      <div>@RickZhou/Editor</div>
      <Button size="large" icon={<CodeSandboxOutlined />} onClick={mockFile}>
        Mock File
      </Button>
    </div>
  );
};

export default Welcome;
