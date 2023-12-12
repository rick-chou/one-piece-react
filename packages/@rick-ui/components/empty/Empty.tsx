import { Spin } from 'antd';
import { type FC } from 'react';
import Show from '../show';

const BASE64_BG = `data:image/png;base64,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`;

export type EmptyProps = {
  desc?: React.ReactNode;
  loading?: boolean;
  height?: string;
};

const Empty: FC<EmptyProps> = ({
  desc = 'No Results Found',
  loading = false,
  height = 'calc(100vh - 200px)',
}) => {
  return (
    <Spin spinning={loading} style={{ maxHeight: 'none' }}>
      <div
        className="flex flex-col justify-center items-center"
        style={{ height }}>
        <div
          className="h-[200px] min-w-full"
          style={{ background: `url(${BASE64_BG}) no-repeat center center` }}
        />
        <div className="text-gray-800 text-xl md:text-2xl font-bold text-center mb-2">
          <Show when={loading} fallback={desc}>
            Loading...
          </Show>
        </div>
      </div>
    </Spin>
  );
};

export default Empty;
