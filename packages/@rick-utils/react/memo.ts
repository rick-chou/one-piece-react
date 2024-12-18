import type {
  ComponentType,
  FunctionComponent,
  MemoExoticComponent,
  NamedExoticComponent,
} from 'react';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

/**
 * @note "SVC" is short for "Shallow-Value-Compare"
 */
export function memoSVC<P extends Record<string, unknown>>(
  Component: FunctionComponent<P>,
): NamedExoticComponent<P>;
export function memoSVC<T extends ComponentType<any>>(
  Component: T,
): MemoExoticComponent<T> {
  return memo(Component, isEqual);
}
