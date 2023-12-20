import type { FC, ReactNode } from 'react';

export type ShowProps = {
  when: boolean;
  fallback?: (() => JSX.Element) | JSX.Element;
  children: (() => JSX.Element) | JSX.Element;
};

const render = (children?: (() => ReactNode) | ReactNode) => {
  if (typeof children === 'function') {
    return children();
  }

  return children;
};

const Show: FC<ShowProps> = ({ when, fallback, children }) => {
  return <>{when ? render(children) : render(fallback)}</>;
};

export default Show;
