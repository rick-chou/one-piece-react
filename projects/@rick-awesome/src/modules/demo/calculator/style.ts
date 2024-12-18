import { css } from '@emotion/react';

const neumorphism = css`
  box-shadow: 6px 6px 16px 0 var(--color-calculator-dark-highlight),
    -6px -6px 16px 0 var(--color-calculator-soft-highlight);
`;

const insetNeumorphism = css`
  box-shadow: inset 6px 6px 5px 0 var(--color-calculator-dark-highlight),
    inset -6px -6px 5px 0 var(--color-calculator-soft-highlight);
`;

const inOutNeumorphism = css`
  box-shadow: 6px 6px 16px 0 var(--color-calculator-dark-highlight),
    -6px -6px 16px 0 var(--color-calculator-soft-highlight),
    inset 6px 6px 5px 0 var(--color-calculator-dark-highlight),
    inset -6px -6px 5px 0 var(--color-calculator-soft-highlight);
`;

export const calculatorStyle = css`
  &.dark {
    --color-calculator-bg: #131419;
    --color-calculator-primary-text: #c7c7c7;
    --color-calculator-secondary-text: #03a9f4;
    --color-calculator-soft-highlight: rgba(255, 255, 255, 0.05);
    --color-calculator-dark-highlight: rgba(0, 0, 0, 0.51);
  }

  &.light {
    --color-calculator-bg: #e0e5ec;
    --color-calculator-primary-text: rgba(144, 152, 168, 1);
    --color-calculator-secondary-text: rgba(51, 64, 89, 1);
    --color-calculator-soft-highlight: rgba(255, 255, 255, 0.43);
    --color-calculator-dark-highlight: rgba(217, 210, 200, 0.51);
  }

  background: var(--color-calculator-bg);
  color: var(--color-calculator-primary-text);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'toggle toggle toggle toggle' 'display display display display' 'c signed percent divide' 'seven eight nine times' 'four five six minus' 'one two three plus' 'zero zero decimal equals';
  grid-row-gap: 25px;
  grid-column-gap: 25px;
  border-radius: 20px;
  padding: 0px 40px 20px 40px;
  margin-top: 4px;
  width: 80%;

  .display {
    ${inOutNeumorphism};
    border: 5px solid var(--color-calculator-soft-highlight);
    color: var(--color-calculator-secondary-text);
    border-radius: 12px;
    transition: 0.1s all ease-in-out;
    height: 60px;
    line-height: 60px;
    text-align: right;
    padding-right: 20px;
    width: 100%;
    font-size: 32px;
    letter-spacing: 4px;
  }

  .neumorphism {
    ${neumorphism};
    border-radius: 50%;
    transition: 0.1s all ease-in-out;
    border: 1px solid var(--color-calculator-soft-highlight);

    &:hover {
      ${insetNeumorphism};
      color: var(--color-calculator-secondary-text);
    }
  }

  span {
    text-align: center;
    height: 60px;
    width: 60px;
    line-height: 60px;
  }

  .zero {
    width: 100%;
    border-radius: 12px;
  }

  .toggle {
    grid-area: toggle;
  }

  .display {
    grid-area: display;
  }

  .c {
    grid-area: c;
  }

  .signed {
    grid-area: signed;
  }

  .percent {
    grid-area: percent;
  }

  .divide {
    grid-area: divide;
  }

  .seven {
    grid-area: seven;
  }

  .eight {
    grid-area: eight;
  }

  .nine {
    grid-area: nine;
  }

  .times {
    grid-area: times;
  }

  .four {
    grid-area: four;
  }

  .five {
    grid-area: five;
  }

  .six {
    grid-area: six;
  }

  .minus {
    grid-area: minus;
  }

  .one {
    grid-area: one;
  }

  .two {
    grid-area: two;
  }

  .three {
    grid-area: three;
  }

  .plus {
    grid-area: plus;
  }

  .zero {
    grid-area: zero;
  }

  .decimal {
    grid-area: decimal;
  }

  .equals {
    grid-area: equals;
  }
`;
