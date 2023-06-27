/**
 * @link https://codepen.io/rickyeckhardt/pen/eYNzRQJ
 */

import { useEffect } from 'react';

const NeumorphicCalculator = () => {
  useEffect(() => {
    var keys = document.querySelectorAll('#calc span');
    var operators = ['+', '-', 'x', '÷'];
    var decimalAdded = false;

    for (var i = 0; i < keys.length; i++) {
      keys[i].onclick = function (e) {
        var input = document.querySelector('.display');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if (btnVal == 'C') {
          input.innerHTML = '';
          decimalAdded = false;
        } else if (btnVal == '=') {
          var equation = inputVal;
          var lastChar = equation[equation.length - 1];

          equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

          if (operators.indexOf(lastChar) > -1 || lastChar == '.')
            equation = equation.replace(/.$/, '');

          if (equation) input.innerHTML = eval(equation);

          decimalAdded = false;
        } else if (operators.indexOf(btnVal) > -1) {
          var lastChar = inputVal[inputVal.length - 1];

          if (inputVal != '' && operators.indexOf(lastChar) == -1)
            input.innerHTML += btnVal;
          else if (inputVal == '' && btnVal == '-') input.innerHTML += btnVal;

          if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
            input.innerHTML = inputVal.replace(/.$/, btnVal);
          }

          decimalAdded = false;
        } else if (btnVal == '.') {
          if (!decimalAdded) {
            input.innerHTML += btnVal;
            decimalAdded = true;
          }
        } else {
          input.innerHTML += btnVal;
        }

        // prevent page jumps
        e.preventDefault();
      };
    }

    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]',
    );

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
  }, []);

  return (
    <>
      <div className="calculator" id="calc">
        <div className="toggle">
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input id="checkbox" type="checkbox" />
              <div className="slider round"></div>
            </label>
          </div>
        </div>
        <div className="display"></div>
        <span className="c neumorphic">C</span>
        <span className="signed neumorphic">+/-</span>
        <span className="percent neumorphic">%</span>
        <span className="divide neumorphic">÷</span>
        <span className="seven neumorphic">7</span>
        <span className="eight neumorphic">8</span>
        <span className="nine neumorphic">9</span>
        <span className="times neumorphic">x</span>
        <span className="four neumorphic">4</span>
        <span className="five neumorphic">5</span>
        <span className="six neumorphic">6</span>
        <span className="minus neumorphic">-</span>
        <span className="one neumorphic">1</span>
        <span className="two neumorphic">2</span>
        <span className="three neumorphic">3</span>
        <span className="plus neumorphic">+</span>
        <span className="zero neumorphic">0</span>
        <span className="decimal neumorphic">.</span>
        <span className="equals neumorphic">=</span>
      </div>
    </>
  );
};

export default NeumorphicCalculator;
