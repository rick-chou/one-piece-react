import { css } from '@emotion/react';
import { isEmptyValue } from '@rickzhou/react-utils/common';
import { Spin } from 'antd';
import { type PropsWithChildren } from 'react';
import { FlexCenter } from '../style.base';
import { DescStyles, EmptyBgStyles } from './style';

export type EmptyProps = {
  desc?: React.ReactNode;
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
    <div
      css={css`
        .spin-wrapper {
          .ant-spin {
            max-height: none;
          }
        }
      `}>
      <Spin spinning={loading} wrapperClassName="spin-wrapper">
        <div css={FlexCenter} style={{ height }}>
          <div css={EmptyBgStyles} />
          <div css={DescStyles}>{desc}</div>
        </div>
      </Spin>
    </div>
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
