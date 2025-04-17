import { css } from '@emotion/react';

export const keyboardStyle = css`
  --keyboard-duration: 0.3s;
  --keyboard-hue: 0;
  --keyboard-sat: 0%;

  position: relative;
  z-index: 999;

  &.light {
    --color-keyboard-bg: hsl(var(--keyboard-hue), var(--keyboard-sat), 20%);
    --color-keyboard-text: hsl(var(--keyboard-hue), var(--keyboard-sat), 90%);
  }

  &.dark {
    --color-keyboard-bg: hsl(var(--keyboard-hue), var(--keyboard-sat), 90%);
    --color-keyboard-text: hsl(var(--keyboard-hue), var(--keyboard-sat), 10%);
  }

  button {
    color: var(--color-keyboard-text);
    font:
      1em/1.5 -apple-system,
      BlinkMacSystemFont,
      'Helvetica Neue',
      Helvetica,
      sans-serif;
    outline: none;
  }
  .keyboard,
  .keyboard:before,
  .keyboard:after {
    transition:
      background-color var(--keyboard-duration),
      box-shadow var(--keyboard-duration);
  }
  .keyboard,
  .keyboard__key-lines {
    display: flex;
  }
  .keyboard {
    background-color: hsl(var(--keyboard-hue), var(--keyboard-sat), 80%);
    background-image: linear-gradient(
      90deg,
      hsla(var(--keyboard-hue), var(--keyboard-sat), 10%, 0.4),
      hsla(var(--keyboard-hue), var(--keyboard-sat), 10%, 0)
    );
    border-radius: 0.75em;
    box-shadow:
      -0.5em -0.5em 0.75em hsla(0, 0%, 0%, 0.6),
      0 0 0 1px hsl(var(--keyboard-hue), var(--keyboard-sat), 67%) inset;
    align-items: center;
    margin: auto;
    padding: 0.375em;
    position: relative;
    width: 18.5em;
    height: 6.5em;
  }
  .keyboard:before,
  .keyboard:after {
    background-color: hsl(var(--keyboard-hue), var(--keyboard-sat), 90%);
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
  }
  .keyboard:before {
    box-shadow:
      -0.5em -0.5em 0.75em hsla(0, 0%, 0%, 0.6),
      0.25em 0 0.25em hsla(var(--keyboard-hue), var(--keyboard-sat), 10%, 0.2)
        inset,
      0.25em -1.25em 0.5em
        hsla(var(--keyboard-hue), var(--keyboard-sat), 10%, 0.5) inset;
    left: calc(50% - 0.5em);
    width: 1em;
    height: 40em;
  }
  .keyboard:after {
    border-radius: 0.25em 0.25em 0 0;
    box-shadow: 0.375em -0.25em 0.5em
      hsla(var(--keyboard-hue), var(--keyboard-sat), 10%, 0.5) inset;
    left: calc(50% - 0.75em);
    width: 1.5em;
    height: 1.25em;
  }
  .keyboard__cmd {
    display: block;
    width: 1em;
    height: 1em;
  }
  .keyboard__key {
    background-color: hsl(var(--keyboard-hue), var(--keyboard-sat), 95%);
    border-radius: 0.5em;
    box-shadow:
      -0.4em -0.25em 0.25em hsla(0, 0%, 0%, 0.25),
      0 0 0 0.1em hsla(0, 0%, 0%, 0.3),
      0.04em 0.04em 0.04em hsla(0, 0%, 0%, 0.4) inset,
      -0.1em -0.1em 0.04em hsla(0, 0%, 100%, 0.8) inset;
    color: hsl(var(--keyboard-hue), var(--keyboard-sat), 50%);
    margin: 0 0.375em;
    outline: transparent;
    padding: 0.75em;
    position: relative;
    width: 5em;
    height: 5em;
    transition:
      background-color var(--keyboard-duration),
      box-shadow 0.15s,
      color var(--keyboard-duration);
    appearance: none;
    user-select: none;
  }
  .keyboard__key--meta {
    width: 5.5em;
  }
  .keyboard__key:active,
  .keyboard__key.active {
    box-shadow:
      0 0 0.2em hsla(0, 0%, 0%, 0.2),
      0 0 0 0.1em hsla(0, 0%, 0%, 0.4),
      0 -0.05em 0 hsla(0, 0%, 0%, 0.6) inset,
      -0.05em -0.15em 0.05em hsla(0, 0%, 100%, 0.8) inset;
  }
  .keyboard__key-line {
    font-size: 2em;
    line-height: 1;
  }
  .keyboard__key-line--small {
    font-size: 0.875em;
  }
  .keyboard__key-line--tr {
    margin: 0 0 auto auto;
  }
  .keyboard__key-line--br {
    margin: auto 0 0 auto;
  }
  .keyboard__key-lines {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: transform 0.15s;
  }
  .keyboard__key:active .keyboard__key-lines,
  .keyboard__key.active .keyboard__key-lines {
    transform: translateY(-1px);
  }
  .keyboard__key:before {
    box-shadow: 0 0 0 0.5em hsla(223, 90%, 50%, 0);
    border-radius: 0.5em;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: box-shadow var(--keyboard-duration);
  }
  .keyboard__key:focus-visible:before {
    box-shadow: 0 0 0 0.5em hsla(223, 90%, 50%, 0.5);
  }

  &.dark {
    .keyboard__key {
      background-color: hsl(var(--keyboard-hue), var(--keyboard-sat), 15%);
      box-shadow:
        -0.4em -0.25em 0.25em hsla(0, 0%, 0%, 0.25),
        0 0 0 0.1em hsla(0, 0%, 0%, 0.3),
        0.04em 0.04em 0.04em hsla(0, 0%, 0%, 0.4) inset,
        -0.1em -0.1em 0.04em hsla(0, 0%, 100%, 0.05) inset;
      color: hsl(var(--keyboard-hue), var(--keyboard-sat), 90%);
    }
    .keyboard__key:active,
    .keyboard__key.active {
      box-shadow:
        0 0 0.2em hsla(0, 0%, 0%, 0.2),
        0 0 0 0.1em hsla(0, 0%, 0%, 0.4),
        0 -0.05em 0 hsla(0, 0%, 0%, 0.4) inset,
        -0.05em -0.15em 0.05em hsla(0, 0%, 100%, 0.05) inset;
    }
  }
`;
