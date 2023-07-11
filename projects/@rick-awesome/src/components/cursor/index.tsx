import { Global, css } from '@emotion/react';
import gsap from 'gsap';
import { useEffect } from 'react';

const size = 8;
const sizeF = 36;

// add -webkit-user-drag to disable drag

const style = css({
  body: {
    cursor: 'none',
    userSelect: 'none',
    webkitUserDrag: 'none',
  },
  '.rick-cursor': {
    height: `${size}px`,
    width: `${size}px`,
    borderRadius: '50%',
    background: 'white',
    position: 'absolute',
    zIndex: 999,
    pointerEvents: 'none',
    mixBlendMode: 'difference',
    '&-f': {
      height: `${sizeF}px`,
      width: `${sizeF}px`,
      position: 'absolute',
      top: '0',
      left: '0',
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='47' height='47' viewBox='0 0 47 47' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M42.4202 42.4202C38.8403 46 33.3594 46 23.5 46C13.6406 46 8.15966 46 4.57983 42.4202C1 38.8403 1 33.3594 1 23.5C1 13.6406 1 8.15966 4.57983 4.57983C8.15966 1 13.6406 1 23.5 1C33.3594 1 38.8403 1 42.4202 4.57983C46 8.15966 46 13.6406 46 23.5C46 33.3594 46 38.8403 42.4202 42.4202Z' stroke='white'/%3E%3C/svg%3E%0A\")",
      backgroundSize: 'cover',
      mixBlendMode: 'difference',
      pointerEvents: 'none',
      opacity: 0.5,
    },
  },
});

const initCursor = () => {
  function leap(start: number, end: number, amount: number) {
    return (1 - amount) * start + amount * end;
  }

  const cursor = document.createElement('div');
  cursor.className = 'rick-cursor';

  const cursorF = document.createElement('div');
  cursorF.className = 'rick-cursor-f';
  let cursorX = 0;
  let cursorY = 0;
  let pageX = 0;
  let pageY = 0;
  const followSpeed = 0.16;

  document.body.appendChild(cursor);
  document.body.appendChild(cursorF);

  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    cursorF.style.display = 'none';
  }

  window.addEventListener('mousemove', function (e) {
    pageX = e.clientX;
    pageY = e.clientY;
    cursor.style.left = `${e.clientX - size / 2}px`;
    cursor.style.top = `${e.clientY - size / 2}px`;
  });

  function loop() {
    cursorX = leap(cursorX, pageX, followSpeed);
    cursorY = leap(cursorY, pageY, followSpeed);
    cursorF.style.top = `${cursorY - sizeF / 2}px`;
    cursorF.style.left = `${cursorX - sizeF / 2}px`;
    requestAnimationFrame(loop);
  }

  loop();

  let startY: number;
  let endY: number;
  let clicked = false;

  function mousedown(e: MouseEvent) {
    gsap.to(cursor, { scale: 4.5 });
    gsap.to(cursorF, { scale: 0.4 });
    clicked = true;
    startY = e.clientY;
  }

  function mouseup(e: MouseEvent) {
    gsap.to(cursor, { scale: 1 });
    gsap.to(cursorF, { scale: 1 });
    endY = e.clientY || endY;
    if (clicked && startY && Math.abs(startY - endY!) >= 40) {
      clicked = false;
      startY = 0;
      endY = 0;
    }
  }

  window.addEventListener('mousedown', mousedown);
  window.addEventListener('mouseup', mouseup);
};

const Cursor = () => {
  useEffect(() => {
    initCursor();
  }, []);

  return <Global styles={style} />;
};

export default Cursor;
