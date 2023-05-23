import { Card } from 'antd';
import { type CardProps } from 'antd/es/card';
import { type FC, type PropsWithChildren } from 'react';
import { shadow } from './style';

const DisplayCard: FC<PropsWithChildren<CardProps>> = ({
  children,
  ...props
}) => {
  return (
    <Card css={shadow} {...props}>
      {children}
    </Card>
  );
};

export default DisplayCard;
