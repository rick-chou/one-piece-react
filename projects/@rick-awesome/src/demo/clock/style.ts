import { css } from '@emotion/react';

export const clockStyle = css({
  padding: '120px 100px',
  position: 'relative',
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30vw',
  height: 'var(--layout-content-height)',
});

export const blockStyle = css`
  width: calc(100% / 6);
  height: 20%;
  color: var(--color-primary-bg-hover);
  transition: 0.4s;

  &:not(:nth-of-type(n + 16)):nth-of-type(n + 11),
  &:not(:nth-of-type(n + 46)):nth-of-type(n + 41) {
    margin-right: 10px;
  }

  &:not(:nth-of-type(n + 31)):nth-of-type(n + 26) {
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

  &:nth-of-type(-n + 10):before {
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
