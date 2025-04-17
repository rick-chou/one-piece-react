import { memoSVC, type RecordMapping } from '@rickzhou/react-utils';
import {
  Tabs as AntdTabs,
  Segmented,
  Space,
  type TabsProps as AntdTabsProps,
} from 'antd';
import { useState } from 'react';

export type TabProps = RecordMapping<AntdTabsProps>;

const Tabs = memoSVC<TabProps>(props => {
  const [currentTab, setCurrentTab] = useState<string>(
    (props.items?.[0]?.key ?? '') as string,
  );
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Segmented<string>
        options={props.items?.map(i => i.key) ?? []}
        onChange={value => {
          setCurrentTab(value);
        }}
      />
      <AntdTabs
        {...props}
        activeKey={currentTab}
        renderTabBar={() => <div />}
      />
    </Space>
  );
});

export default Tabs;
