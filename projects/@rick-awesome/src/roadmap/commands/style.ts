import { css } from '@emotion/react';

export const CommandModalInputStyle = css`
  background: transparent;
  border: none;
  outline: none;
  color: #e5e5e5;
  width: 100%;
  font-size: 16px;
  line-height: 1;
  padding: 16px;
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

export const CommandHotkeyTitleStyle = css`
  color: rgb(128, 128, 128);
  font-size: 12px;
  font-weight: 700;
  padding-top: 8px;
  padding-bottom: 8px;
  user-select: none;
  padding-left: 16px;
`;

export const CommandHotkeyItemStyle = css`
  color: rgb(229, 229, 229);
  font-size: 13px;
  height: 36px;
  padding-top: 8px;
  padding-bottom: 8px;
  user-select: none;
  padding-left: 24px;
  cursor: pointer;

  &:hover {
    background-color: rgba(229, 229, 229, 0.1);
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
