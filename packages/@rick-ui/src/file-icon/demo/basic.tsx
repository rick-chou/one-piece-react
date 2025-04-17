import { FileIcon } from '@rickzhou/react-ui';
import { copyText } from '@rickzhou/react-utils';
import { Button, Space, Tooltip } from 'antd';
import { omit } from 'lodash-es';

const IconMap = omit(FileIcon, [
  'getFileIcon',
  'getFileType',
  'getFileLanguage',
]);

const App = () => {
  return (
    <Space style={{ 'flex-wrap': 'wrap' }}>
      {Object.entries(IconMap).map(([IconKey, Icon]) => {
        return (
          <Tooltip title={IconKey} key={IconKey} trigger="hover" zIndex={9999}>
            <Button
              icon={<Icon />}
              onClick={() => {
                copyText(`<FileIcon.${IconKey} />`);
              }}
            />
          </Tooltip>
        );
      })}
    </Space>
  );
};

export default App;
