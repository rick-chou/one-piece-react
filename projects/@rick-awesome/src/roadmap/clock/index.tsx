/**
 * @link https://codepen.io/graphilla/pen/zEZKpN
 */

import { useEffect } from 'react';
import { blockStyle, clockStyle } from './style';

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
  useEffect(() => {
    const blocks: Element[][] = [];
    const digits = Array.from(document.querySelectorAll('.block'));

    for (let i = 0; i < 4; i++) {
      blocks.push(digits.slice(i * 15, i * 15 + 15));
    }

    const setNum = (block: Element[], num: string) => {
      const n = numbers[Number(num)];
      for (let i = 0; i < block.length; i++) {
        block[i].classList[n[i] === 1 ? 'add' : 'remove']('active');
      }
    };

    const time: {
      s: string;
      m: string;
      h: string;
      p: number | undefined;
    } = {
      s: '',
      m: '',
      h: '',
      p: undefined,
    };

    // time loop
    const animator = () => {
      const d = new Date();
      let h = d.getHours().toString();
      let m = d.getMinutes().toString();
      let s = d.getSeconds().toString();

      s = s.padStart(2, '0');
      m = m.padStart(2, '0');
      h = h.padStart(2, '0');

      if (s !== time.s) {
        for (let i = 0; i < digits.length; i++) {
          const d = digits[i];
          if (i === Number(s)) {
            d.classList.add('second');
            if (time.p !== undefined) digits[time.p].classList.remove('second');
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
    <div css={clockStyle}>
      {Array.from({ length: 60 })
        .fill(0)
        .map((_, id) => (
          <div css={blockStyle} className="block" data-num={id} key={id}></div>
        ))}
    </div>
  );
};

export default TypographicClock;
