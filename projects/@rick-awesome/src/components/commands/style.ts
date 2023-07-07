import { css } from '@emotion/react';

export const CommandModalContainer = css`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;

export const CommandModalInputStyle = css`
  background: transparent;
  border: none;
  outline: none;
  color: #e5e5e5;
  width: 100%;
  font-size: 16px;
  line-height: 1;
  padding: 16px;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const CommandModalInputDividerWrapperStyle = css`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 4px;
`;

export const CommandModalInputDividerStyle = css`
  background-color: #e5e5e514;
  height: 1px;
  border: none;
`;

export const CommandItemTitleStyle = css`
  color: rgb(128, 128, 128);
  font-size: 12px;
  font-weight: 700;
  padding-top: 8px;
  padding-bottom: 8px;
  user-select: none;
  padding-left: 16px;
  margin-left: 1rem;
`;

export const CommandListStyle = css`
  height: 24rem;
  max-height: 24rem;
  overflow-y: scroll;
`;

export const CommandItemStyle = css`
  color: var(--color-primary-text);
  font-size: 13px;
  height: 36px;
  padding-top: 8px;
  padding-bottom: 8px;
  user-select: none;
  padding-left: 24px;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;

  &.hover {
    background-color: var(--color-primary-bg-hover);
    border-radius: 4px;
  }
`;

export const CommandHotkeyStyle = css`
  border-radius: 4px;
  padding: 4px;
  line-height: 1;
  margin: 0px;
  height: 20px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: #e5e5e51a;
  font-size: 12px;
  color: #e5e5e5;
  user-select: none;
`;
