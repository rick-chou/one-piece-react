import { isEmptyValue } from '@rickzhou/react-utils/common';
import { Spin } from 'antd';
import { type PropsWithChildren } from 'react';
import { EmptyBgStyles } from './style';

export type EmptyProps = {
  desc?: string;
  loading?: boolean;
  height?: string;
};

const Empty: React.FC<EmptyProps> & {
  WithEmpty: typeof WithEmpty;
} = ({
  loading = false,
  desc = loading ? 'Loading...' : 'No Results Found',
  height = '100%',
}) => {
  return (
    <Spin spinning={loading}>
      <div
        className="flex flex-col justify-center items-center"
        style={{ height }}>
        <div css={EmptyBgStyles} />
        <div className="text-gray-800 text-xl md:text-2xl font-bold text-center mb-2">
          {desc}
        </div>
      </div>
    </Spin>
  );
};

type WithEmptyProps = {
  data: any;
  showEmpty?: boolean;
  emptyProps?: EmptyProps;
} & PropsWithChildren;

const WithEmpty: React.FC<WithEmptyProps> = ({
  data,
  children,
  showEmpty = true,
  emptyProps = {},
}) => {
  return (
    <>
      {isEmptyValue(data) ? (
        showEmpty ? (
          <Empty height="40vh" {...emptyProps} />
        ) : null
      ) : (
        children
      )}
    </>
  );
};

Empty.WithEmpty = WithEmpty;

export default Empty;
