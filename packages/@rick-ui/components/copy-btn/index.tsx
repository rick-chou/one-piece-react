import { CopyOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import to from 'await-to-js';

export type CopyBtnProps = {
  copyText: string;
  showText?: boolean;
};

const CopyButton: React.FC<CopyBtnProps> = ({ copyText, showText = false }) => {
  return (
    <Button
      icon={<CopyOutlined />}
      onClick={async () => {
        const [err] = await to(navigator.clipboard.writeText(copyText));
        if (err) {
          await message.error(`copied fail`);
        } else {
          await message.success(`${copyText} copied 🎉`);
        }
      }}>
      {showText ? copyText : ''}
    </Button>
  );
};

export default CopyButton;
