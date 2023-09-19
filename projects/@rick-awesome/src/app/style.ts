import { Bg } from '@/assets/pic';
import { css } from '@emotion/react';

export const globalStyle = css`
  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-bg-hover);
    border-radius: 10px;
  }

  body {
    font-family: var(--body-font);
    color: var(--color-primary-text);
    background-image: url(${Bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: color-dodge;
    background-color: rgba(18, 21, 39, 0.86);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em 2em;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    user-select: none;
    &:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      content: '';
    }
  }
`;
