import { css } from '@emotion/react';

export const codeBlockStyle = css`
  border-color: #ddd;
  color: #777;
  border: 1px solid;
  border-radius: 3px;
  box-shadow: 0 0 0 3px rgba(11, 13, 14, 0.02);
  font-size: 14px;
  margin: 2em auto;
  overflow: hidden;

  figcaption {
    background: var(--color-secondary-bg);
    border-bottom: 1px solid;
    display: flex;
    letter-spacing: 1px;
    padding-left: 12px;
    padding-right: 66px;
    margin: 0px;
  }
`;

export const codeBtnStyle = css`
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  margin: 12px 6px 12px 0;
  min-width: 12px;

  &:nth-of-type(1) {
    background-color: red;
  }
  &:nth-of-type(2) {
    background-color: #ccc;
  }
  &:nth-of-type(3) {
    background-color: yellowgreen;
  }
`;

export const codeFilename = css`
  flex: 1;
  line-height: 36px;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
`;
