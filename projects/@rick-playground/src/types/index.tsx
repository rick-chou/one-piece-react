/**
 * Context
 * -------------------------------------------
 */

export type Tab = {
  path: string;
  content: string;
};

export type StateTypes = {
  theme: string;
  currentFilePath: string;
  tabs: Tab[];
};

export type ActionTypes = {
  type: ActionType;
  payload: Partial<StateTypes>;
};

export const initState: StateTypes = {
  theme: '',
  currentFilePath: '',
  tabs: [],
};

export enum ActionType {
  'UPDATE_TABS' = 'UPDATE_TABS',
  'UPDATE_THEME' = 'UPDATE_THEME',
  'RESET_CTX' = 'RESET_CTX',
}
