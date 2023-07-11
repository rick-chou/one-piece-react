import { Hotkey } from '@/config/shortcut';
import { useModalOpen } from '@/hooks/useModalOpen';
import { metaData, type MetaData } from '@/router/meta-data';
import { OpenTypeConfig } from '@/store/slice/modalOpenSlice';
import { Modal } from 'antd';
import { first, last, toLower, upperCase } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandItemStyle,
  CommandItemTitleStyle,
  CommandListStyle,
  CommandModalContainer,
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

const commandItemCls = 'command-item';
const commandHoverCls = 'hover';

const CmdModal = () => {
  const { onHidden, open } = useModalOpen(OpenTypeConfig.CommandOpen);
  const commandInputRef = useRef<HTMLInputElement>(null);
  const [commandItems, setCommandItems] = useState<CommandItemTypes[]>([]);
  const [displayCommandItems, setDisplayCommandItems] = useState<
    CommandItemTypes[]
  >([]);
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    const genCommandItems = () => {
      const commands: CommandItemTypes[] = [];

      Object.entries(metaData)
        .reverse()
        .forEach(([key, value]) => {
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
      setDisplayCommandItems(commands);
    };

    genCommandItems();
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ([Hotkey.ArrowUp, Hotkey.ArrowDown, Hotkey.Enter].includes(e.key)) {
        const item = document.querySelector<HTMLDivElement>(
          `.${commandItemCls}[data-type=item].${commandHoverCls}`,
        );

        const items = document.querySelectorAll<HTMLDivElement>(
          `.${commandItemCls}[data-type=item]`,
        );

        let target: HTMLDivElement;

        if (item) {
          if (e.key === Hotkey.Enter) {
            item.click();
            return;
          }

          const idx = Array.from(items).findIndex(i =>
            i.classList.contains(commandHoverCls),
          );

          if (e.key === Hotkey.ArrowUp && idx !== 0) {
            item?.classList.remove(commandHoverCls);
            target = items[idx - 1];
          }

          if (e.key === Hotkey.ArrowDown && idx !== items.length - 1) {
            item?.classList.remove(commandHoverCls);
            target = items[idx + 1];
          }
        } else {
          target = e.key === Hotkey.ArrowDown ? first(items)! : last(items)!;
        }

        if (target!) {
          target.classList.add(commandHoverCls);
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }
    };

    if (open) {
      window.addEventListener('keydown', fn);
    } else {
      window.removeEventListener('keydown', fn);
    }

    return () => {
      window.removeEventListener('keydown', fn);
    };
  }, [open]);

  const onClick = (item: CommandItemTypes) => {
    if (item.meta?.path) {
      navigate(item.meta.path);
      onHidden();
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        commandInputRef.current?.focus();
      }, 300);
    }
  }, [open]);

  return (
    <Modal
      title={null}
      footer={null}
      open={open}
      bodyStyle={{ padding: 0 }}
      closable={false}
      maskClosable
      mask={false}
      centered
      onCancel={() => {
        onHidden();
        setDisplayCommandItems(commandItems);
        setSearchVal('');
      }}>
      <div css={CommandModalContainer}>
        <input
          value={searchVal}
          placeholder="Type a command or search…"
          css={CommandModalInputStyle}
          ref={commandInputRef}
          onChange={e => {
            const result = commandItems.filter(i => {
              return (
                toLower(i.title).includes(toLower(e.target.value)) ||
                i.mode === 'title'
              );
            });

            if (result.some(i => i.mode === 'item')) {
              setSearchVal(e.target.value);
              setDisplayCommandItems(result);
            }
          }}
        />

        <div css={CommandModalInputDividerWrapperStyle}>
          <hr css={CommandModalInputDividerStyle} />
        </div>

        <div
          css={CommandListStyle}
          onMouseMove={e => {
            const target = e.target as HTMLDivElement;
            if (target.dataset.type === 'item') {
              target.parentNode?.childNodes.forEach(i => {
                (i as HTMLDivElement).classList.remove(commandHoverCls);
              });
              target.classList.add(commandHoverCls);
            }
          }}>
          {displayCommandItems.map(item => {
            return (
              <div
                key={item.title}
                data-type={item.mode}
                className={commandItemCls}
                css={
                  item.mode === 'title'
                    ? CommandItemTitleStyle
                    : CommandItemStyle
                }
                onClick={() => {
                  onClick?.(item);
                }}>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default CmdModal;
