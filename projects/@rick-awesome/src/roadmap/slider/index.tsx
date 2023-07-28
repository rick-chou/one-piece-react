import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';

import './index.scss';

gsap.registerPlugin(ScrollTrigger);

const Slider: React.FC<{ nodes: Array<() => React.ReactElement> }> = ({
  nodes = [],
}) => {
  useLayoutEffect(() => {
    const sections = document.querySelectorAll('section');
    const images = document.querySelectorAll('.bg');
    const outerWrappers = gsap.utils.toArray<HTMLDivElement>('.outer');
    const innerWrappers = gsap.utils.toArray<HTMLDivElement>('.inner');

    document.addEventListener('wheel', handleWheel);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    let listening = false;
    let direction = 'down';
    let current: number;
    let next = 0;

    const touch = {
      startX: 0,
      startY: 0,
      dx: 0,
      dy: 0,
      startTime: 0,
      dt: 0,
    };

    const tlDefaults = {
      ease: 'slow.inOut',
      duration: 1.25,
    };

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function slideIn() {
      if (current !== undefined) gsap.set(sections[current], { zIndex: 0 });

      gsap.set(sections[next], { autoAlpha: 1, zIndex: 1 });
      gsap.set(images[next], { yPercent: 0 });

      const tl = gsap
        .timeline({
          paused: true,
          defaults: tlDefaults,
          onComplete() {
            listening = true;
            current = next;
          },
        })
        .to([outerWrappers[next], innerWrappers[next]], { yPercent: 0 }, 0)
        .from(images[next], { yPercent: 15 }, 0);

      if (current !== undefined) {
        tl.add(
          gsap.to(images[current], {
            yPercent: -15,
            ...tlDefaults,
          }),
          0,
        ).add(
          gsap
            .timeline()
            .set(outerWrappers[current], { yPercent: 100 })
            .set(innerWrappers[current], { yPercent: -100 })
            .set(images[current], { yPercent: 0 })
            .set(sections[current], { autoAlpha: 0 }),
        );
      }

      tl.play(0);
    }

    function slideOut() {
      gsap.set(sections[current], { zIndex: 1 });
      gsap.set(sections[next], { autoAlpha: 1, zIndex: 0 });
      gsap.set([outerWrappers[next], innerWrappers[next]], { yPercent: 0 });
      gsap.set(images[next], { yPercent: 0 });

      gsap
        .timeline({
          defaults: tlDefaults,
          onComplete() {
            listening = true;
            current = next;
          },
        })
        .to(outerWrappers[current], { yPercent: 100 }, 0)
        .to(innerWrappers[current], { yPercent: -100 }, 0)
        .to(images[current], { yPercent: 15 }, 0)
        .from(images[next], { yPercent: -15 }, 0)
        .set(images[current], { yPercent: 0 });
    }

    function handleDirection() {
      listening = false;

      if (direction === 'down') {
        next = current + 1;
        if (next >= sections.length) next = 0;
        slideIn();
      }

      if (direction === 'up') {
        next = current - 1;
        if (next < 0) next = sections.length - 1;
        slideOut();
      }
    }

    function handleWheel(e) {
      if (!listening) return;
      direction = e.wheelDeltaY < 0 ? 'down' : 'up';
      handleDirection();
    }

    function handleTouchStart(e) {
      if (!listening) return;
      const t = e.changedTouches[0];
      touch.startX = t.pageX;
      touch.startY = t.pageY;
    }

    function handleTouchMove(e) {
      if (!listening) return;
      e.preventDefault();
    }

    function handleTouchEnd(e) {
      if (!listening) return;
      const t = e.changedTouches[0];
      touch.dx = t.pageX - touch.startX;
      touch.dy = t.pageY - touch.startY;
      if (touch.dy > 10) direction = 'up';
      if (touch.dy < -10) direction = 'down';
      handleDirection();
    }

    slideIn();
  }, []);

  return (
    <>
      {nodes.map((Node, idx) => {
        return (
          <section key={idx}>
            <div className="outer">
              <div className="inner">
                <Node />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Slider;
