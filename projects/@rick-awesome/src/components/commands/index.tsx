import { type MetaData } from '@/router/meta-data';
import { List, Modal } from 'antd';
import { upperCase } from 'lodash';
import VirtualList from 'rc-virtual-list';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandHotkeyItemStyle,
  CommandHotkeyTitleStyle,
  CommandModalInputDividerStyle,
  CommandModalInputDividerWrapperStyle,
  CommandModalInputStyle,
} from './style';

type CommandItemTypes = {
  type: string;
  mode: 'item' | 'title';
  title: string;
  meta?: MetaData;
};

const CmdModal = () => {
  const [commandModalOpen, setCommandModalOpen] = useState(true);
  const commandInputRef = useRef<HTMLInputElement>(null);
  const [commandItems, setCommandItems] = useState<CommandItemTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const genCommandItems = async () => {
      const commands: CommandItemTypes[] = [];

      const { metaData } = await import('@/router/meta-data');

      Object.entries(metaData).forEach(([key, value]) => {
        commands.push({
          type: key,
          mode: 'title',
          title: upperCase(key),
        });

        value.forEach(i => {
          commands.push({
            type: key,
            mode: 'item',
            title: upperCase(i.name),
            meta: i,
          });
        });
      });

      setCommandItems(commands);
    };

    void genCommandItems();
  }, []);

  const onClick = (item: CommandItemTypes) => {
    if (item.meta?.path) {
      navigate(item.meta.path);
    }
  };

  const toggleCommandModal = useCallback(() => {
    setCommandModalOpen(false);
  }, []);

  useEffect(() => {
    if (commandModalOpen) {
      setTimeout(() => {
        commandInputRef.current?.focus();
      }, 300);
    }
  }, [commandModalOpen]);

  return (
    <Modal
      title={null}
      footer={null}
      open={commandModalOpen}
      bodyStyle={{ padding: 0 }}
      closable={false}
      maskClosable
      mask={false}
      centered
      onCancel={toggleCommandModal}>
      <div>
        <input
          placeholder="Type a command or search…"
          css={CommandModalInputStyle}
          ref={commandInputRef}
        />

        <div css={CommandModalInputDividerWrapperStyle}>
          <hr css={CommandModalInputDividerStyle} />
        </div>

        <List>
          <VirtualList
            data={commandItems}
            height={400}
            itemHeight={36}
            itemKey="title">
            {item => {
              return (
                <div
                  key={item.title}
                  css={
                    item.mode === 'title'
                      ? CommandHotkeyTitleStyle
                      : CommandHotkeyItemStyle
                  }
                  onClick={() => {
                    onClick?.(item);
                  }}>
                  {item.title}
                </div>
              );
            }}
          </VirtualList>
        </List>
      </div>
    </Modal>
  );
};

export default CmdModal;
