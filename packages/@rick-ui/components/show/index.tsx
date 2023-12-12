import type { FC, PropsWithChildren, ReactNode } from 'react';

export type ShowProps = {
  when: boolean;
  fallback?: ReactNode;
};

const Show: FC<PropsWithChildren<ShowProps>> = ({
  when,
  fallback,
  children,
}) => {
  if (when) {
    return children;
  }

  return fallback;
};

export default Show;
