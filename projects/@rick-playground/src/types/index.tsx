/**
 * Context
 * -------------------------------------------
 */

export type Tab = {
  path: string;
  content: string;
};

export type ReplProps = {
  compiler?: Worker;
  formatter?: Worker;
  linter?: Worker;
};
