/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/no-loop-func */
/**
 * @link https://codepen.io/rickyeckhardt/pen/eYNzRQJ
 */

import { useEffect } from 'react';
import { calculatorStyle } from './style';

const operators = ['+', '-', 'x', '÷'];

const Calculator = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const keys = document.querySelectorAll(
      '#calc span',
    ) as NodeListOf<HTMLElement>;
    let decimalAdded = false;

    for (let i = 0; i < keys.length; i++) {
      keys[i].onclick = function (e: any) {
        const input = document.querySelector('.display')!;
        const inputVal = input.innerHTML;
        const btnVal = e.target.innerHTML;

        if (btnVal === 'C') {
          input.innerHTML = '';
          decimalAdded = false;
        } else if (btnVal === '=') {
          let equation = inputVal;
          const lastChar = equation[equation.length - 1];

          equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

          if (operators.includes(lastChar) || lastChar === '.')
            equation = equation.replace(/.$/, '');

          // eslint-disable-next-line no-eval
          if (equation) input.innerHTML = eval(equation);

          decimalAdded = false;
        } else if (operators.includes(btnVal)) {
          const lastChar = inputVal[inputVal.length - 1];

          if (inputVal !== '' && !operators.includes(lastChar))
            input.innerHTML += btnVal;
          else if (inputVal === '' && btnVal === '-') input.innerHTML += btnVal;

          if (operators.includes(lastChar) && inputVal.length > 1) {
            input.innerHTML = inputVal.replace(/.$/, btnVal);
          }

          decimalAdded = false;
        } else if (btnVal === '.') {
          if (!decimalAdded) {
            input.innerHTML += btnVal;
            decimalAdded = true;
          }
        } else {
          input.innerHTML += btnVal;
        }
      };
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div css={calculatorStyle} id="calc">
        <div className="display"></div>
        <span className="c neumorphism">C</span>
        <span className="signed neumorphism">+/-</span>
        <span className="percent neumorphism">%</span>
        <span className="divide neumorphism">÷</span>
        <span className="seven neumorphism">7</span>
        <span className="eight neumorphism">8</span>
        <span className="nine neumorphism">9</span>
        <span className="times neumorphism">x</span>
        <span className="four neumorphism">4</span>
        <span className="five neumorphism">5</span>
        <span className="six neumorphism">6</span>
        <span className="minus neumorphism">-</span>
        <span className="one neumorphism">1</span>
        <span className="two neumorphism">2</span>
        <span className="three neumorphism">3</span>
        <span className="plus neumorphism">+</span>
        <span className="zero neumorphism">0</span>
        <span className="decimal neumorphism">.</span>
        <span className="equals neumorphism">=</span>
      </div>
    </div>
  );
};

export default Calculator;
