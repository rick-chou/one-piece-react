/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
import { TagsFilled } from '@ant-design/icons';
import { useMount } from 'ahooks';
import { Card, Divider, Space } from 'antd';
import { type CardProps } from 'antd/es/card';
import { keys, pick } from 'lodash';
import { useState, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import Code from './code';

const codes = import.meta.glob([
  '../components/*/demo/*.tsx',
  '!../components/*/demo/index.tsx',
]) as Record<string, () => Promise<{ App: FC }>>;

const codesRaw = import.meta.glob(
  ['../components/*/demo/*.tsx', '!../components/*/demo/index.tsx'],
  { as: 'raw', eager: true },
);

type CodeProps = CardProps & {
  col?: number;
};

const Example: FC<CodeProps> = ({ children, col = 1, ...props }) => {
  const location = useLocation();
  const [modules, setModules] = useState<FC[]>([]);
  useMount(async () => {
    const demo = pick(
      codes,
      keys(codes).filter(i => i.includes(location.pathname)),
    );
    const mds: FC[] = [];
    for (const path in demo) {
      const DESC = (await import(path.replace('tsx', 'mdx'))).default;
      const { App } = await demo[path]();
      const code = '~~~tsx\n' + codesRaw[path] + '\n~~~';
      mds.push(() => (
        <Card {...props}>
          <App />
          <Divider orientation="left" plain>
            <Space>
              <TagsFilled />
              <DESC />
            </Space>
          </Divider>
          <div className="bg-[#f6f6f7] rounded-lg overflow-hidden not-prose">
            <Code>{code}</Code>
          </div>
        </Card>
      ));
    }

    setModules(mds);
  });

  return (
    <div
      className="grid gap-8"
      style={{ gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))` }}>
      {modules.map((Md, idx) => (
        <div key={idx} className="h-fit">
          <Md />
        </div>
      ))}
    </div>
  );
};

export default Example;
