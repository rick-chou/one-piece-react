import { Action } from '@/interface';
import { sleep } from '@/utils/sleep';
import type { MenuProps } from 'antd';
import { Modal, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePreview } from './usePreview';

export const useMenus = (
  id: string,
  onDelete: (id: string) => void,
): MenuProps['items'] => {
  const navigate = useNavigate();
  const { showFlowModal } = usePreview();
  return [
    {
      label: (
        <div
          onClick={async () => {
            showFlowModal({ id });
          }}>
          Preview
        </div>
      ),
      key: 'preview',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <div
          onClick={() => {
            navigate(`/edit/${id}?action=${Action.copy}`, {
              relative: 'path',
            });
          }}>
          Copy
        </div>
      ),
      key: Action.copy,
    },
    {
      type: 'divider',
    },
    {
      label: (
        <div
          onClick={() => {
            navigate(`/edit/${id}?action=${Action.edit}`, {
              relative: 'path',
            });
          }}>
          Edit
        </div>
      ),
      key: Action.edit,
    },
    {
      type: 'divider',
    },
    {
      label: (
        <div
          onClick={() =>
            Modal.confirm({
              title: 'Confirm deletion of this flowchart ?',
              async onOk() {
                await sleep(1000);
                await message.success('successfully deleted');
                onDelete(id);
              },
              okButtonProps: { danger: true },
            })
          }>
          Delete
        </div>
      ),
      key: 'delete',
    },
  ];
};
