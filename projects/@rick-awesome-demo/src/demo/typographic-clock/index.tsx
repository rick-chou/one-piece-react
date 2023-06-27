/**
 * @link https://codepen.io/graphilla/pen/zEZKpN
 */

import { useEffect } from 'react';
import './index.scss';

const numbers = [
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // 1
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
  [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
  [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // 7
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 9
];

const TypographicClock = () => {
  const changeTheme = () => {
    document.body.classList.toggle('light-theme');
  };

  useEffect(() => {
    const blocks: Element[][] = [];
    const digits = Array.from(document.querySelectorAll('.block'));

    for (let i = 0; i < 4; i++) {
      blocks.push(digits.slice(i * 15, i * 15 + 15));
    }

    const setNum = (block, num) => {
      const n = numbers[num];
      for (let i = 0; i < block.length; i++) {
        block[i].classList[n[i] === 1 ? 'add' : 'remove']('active');
      }
    };

    const time = {
      s: '',
      m: '',
      h: '',
      p: null,
    };

    // time loop
    const animator = () => {
      const d = new Date();
      let h = d.getHours().toString();
      let m = d.getMinutes().toString();
      let s = d.getSeconds().toString();

      s = s.length === 1 ? '0' + s : s;
      m = m.length === 1 ? '0' + m : m;
      h = h.length === 1 ? '0' + h : h;

      if (s !== time.s) {
        for (let i = 0; i < digits.length; i++) {
          const d = digits[i];
          if (i === Number(s)) {
            d.classList.add('second');
            if (time.p !== null) digits[time.p].classList.remove('second');
            time.p = i;
            time.s = s;
          }
        }
      }

      if (m !== time.m) {
        setNum(blocks[2], m[0]);
        setNum(blocks[3], m[1]);
        time.m = m;
      }

      if (h !== time.h) {
        setNum(blocks[0], h[0]);
        setNum(blocks[1], h[1]);
        time.h = h;
      }

      window.requestAnimationFrame(animator);
    };

    // init
    window.requestAnimationFrame(animator);
  }, []);

  return (
    <>
      <div className="clock">
        {Array.from({ length: 60 })
          .fill(0)
          .map((_, id) => (
            <div className="block" data-num={id} key={id}></div>
          ))}
        <div className="divider"></div>
      </div>
      <div className="switch-theme">
        <p>Change theme</p>
        <label className="switch">
          <input type="checkbox" onChange={changeTheme} />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
};

export default TypographicClock;
