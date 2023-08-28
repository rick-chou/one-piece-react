import Editor from '@/editor';
import { useTabs } from '@/hooks/useTabs';
import { ReplProps } from '@/types/index';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Tabs } from 'antd';
import React, { useState } from 'react';

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-node-key': string;
}

const defaultActiveTab = 'file:///app.tsx';

const DraggableTabNode = ({ className, ...props }: DraggableTabPaneProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props['data-node-key'],
    });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleX: 1 }),
    transition,
    cursor: 'move',
  };

  return React.cloneElement(props.children as React.ReactElement, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};

const EditorTabs: React.FC<ReplProps> = ({ compiler }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveTab);
  const { updateTab, tabs } = useTabs();

  const [items, setItems] = useState(
    tabs!.map(i => ({
      key: i.path,
      label: i.path.split('/').at(-1),
      children: <Editor url={i.path} />,
    })),
  );

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setItems(prev => {
        const activeIndex = prev.findIndex(i => i.key === active.id);
        const overIndex = prev.findIndex(i => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  const add = () => {
    const newActiveKey = 'file:///Untitled';
    updateTab(newActiveKey, 'add');
    setActiveKey(newActiveKey);
  };

  const remove = (path: string) => {
    updateTab(path, 'remove');
    setActiveKey(defaultActiveTab);
  };

  const onEdit = (path: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(path);
    }
  };

  return (
    <Tabs
      type="editable-card"
      items={items}
      onTabClick={setActiveKey}
      onEdit={(path, action) => onEdit(path as string, action)}
      activeKey={activeKey}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
          <SortableContext
            items={items.map(i => i.key)}
            strategy={horizontalListSortingStrategy}>
            <DefaultTabBar {...tabBarProps}>
              {node => (
                <DraggableTabNode {...node.props} key={node.key}>
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}
    />
  );
};

export default EditorTabs;
