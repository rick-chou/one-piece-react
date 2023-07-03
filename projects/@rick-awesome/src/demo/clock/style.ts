import { css } from '@emotion/react';

export const clockStyle = css`
  padding: 20px;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  width: 450px;
  height: 50vh;
`;

export const blockStyle = css`
  width: calc(100% / 6);
  height: 20%;
  color: var(--color-primary-bg-hover);
  transition: 0.4s;

  &:not(:nth-child(n + 16)):nth-child(n + 11),
  &:not(:nth-child(n + 46)):nth-child(n + 41) {
    margin-right: 10px;
  }
  &:not(:nth-child(n + 31)):nth-child(n + 26) {
    margin-right: 20px;
  }

  &:before {
    content: attr(data-num);
    position: relative;
    display: block;
    font-size: 16px;
    width: 100%;
    height: 100%;
    line-height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(-n + 10):before {
    content: '0' attr(data-num);
  }

  &.active:before {
    color: var(--color-primary-text);
    font-weight: 900;
  }

  &.second:before {
    color: var(--color-active);
  }
`;
