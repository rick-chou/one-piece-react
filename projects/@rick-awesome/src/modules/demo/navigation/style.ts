import { css } from '@emotion/react';

export const ulStyle = css`
  position: relative;
  transform: rotate(-35deg) skew(20deg, 5deg);
`;

export const listItemStyle = css`
  background: var(--color-secondary-bg);
  color: var(--color-primary-text);
  text-align: center;
  height: 2.5em;
  width: 4em;
  line-height: 2.5em;
  border-bottom: 1px solid var(--color-primary-bg-hover);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.25s linear;

  &:hover {
    background: var(--color-active);
    color: var(--color-primary-text);
    transform: translate(0.9em, -0.9em);
    transition: all 0.25s linear;

    &:before,
    &:after {
      transition: all 0.25s linear;
    }

    &:before {
      background: var(--color-active);
      width: 1em;
      top: 0.5em;
      left: -1em;
    }

    &:after {
      background: var(--color-active);
      width: 1em;
      bottom: -2.5em;
      left: 1em;
      height: 4em;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: all 0.25s linear;
    width: 0.5em;
  }

  &:after {
    height: 4em;
    background: var(--color-secondary-bg);
    bottom: -2.25em;
    left: 1.5em;
    transform: rotate(90deg) skew(0, 45deg);
  }

  &:before {
    height: 2.5em;
    background: var(--color-secondary-bg);
    top: 0.25em;
    left: -0.5em;
    transform: skewY(-45deg);
  }
`;
