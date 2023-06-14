import { CtxMenu, RickHotKey } from '@/config/hotkey';
import { parseDir, parseFiles, parseZip } from '@rickzhou/react-utils/file';
import { useCallback, useContext } from 'react';

import { ActionType, type StateTypes } from '@/types';
import { Menu, useContextMenu } from 'react-contexify';
import { Context } from '../../store';

export const SiderCtxMenu = 'sider_context_menu';

export const useSiderContextMenu = () => {
  const { show } = useContextMenu({ id: SiderCtxMenu });

  return {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    showSiderContextMenu: useCallback(show, []),
  };
};

const SiderContextMenu = () => {
  const { dispatch } = useContext(Context);

  const uploadFiles = async () => {
    const fileHandles = await window.showOpenFilePicker({
      multiple: true,
    });
    const files: File[] = [];
    await Promise.all(
      fileHandles.map(async file => {
        files.push(await file.getFile());
      }),
    );
    const { fileSet, fileTree } = parseFiles(files);
    updateCtx(fileSet, fileTree);
  };

  const uploadZip = async () => {
    const [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: 'zip',
          accept: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'application/zip': ['.zip'],
          },
        },
      ],
    });
    const { fileSet, fileTree } = await parseZip(await fileHandle.getFile());
    updateCtx(fileSet, fileTree);
  };

  const updateCtx = (
    fileSet: StateTypes['fileSet'],
    fileTree: StateTypes['fileTree'],
  ) => {
    dispatch({ type: ActionType.RESET_CTX, payload: {} });
    dispatch({ type: ActionType.UPDATE_FILE_SET, payload: { fileSet } });
    dispatch({ type: ActionType.UPDATE_FILE_TREE, payload: { fileTree } });
  };

  const uploadDir = async () => {
    const dirHandle = await window.showDirectoryPicker();
    const { fileSet, fileTree } = await parseDir(dirHandle);
    updateCtx(fileSet, fileTree);
  };

  return (
    <div>
      <Menu id={SiderCtxMenu} theme="dark">
        {/* <CtxMenu hotkey={RickHotKey.newFile} title="New file" />
        <CtxMenu hotkey={RickHotKey.newDir} title="New directory" />
        <Separator /> */}
        <CtxMenu
          hotkey={RickHotKey.uploadFiles}
          title="Upload files"
          onClick={uploadFiles}
        />
        <CtxMenu
          hotkey={RickHotKey.uploadZip}
          title="Upload zip"
          onClick={uploadZip}
        />
        <CtxMenu
          hotkey={RickHotKey.uploadDir}
          title="Upload directory"
          onClick={uploadDir}
        />
      </Menu>
    </div>
  );
};

export default SiderContextMenu;
