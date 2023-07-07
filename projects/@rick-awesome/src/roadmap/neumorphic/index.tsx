import { useEffect } from 'react';
import {
  IoIosClose,
  IoIosColorPalette,
  IoIosHome,
  IoIosPause,
  IoIosPerson,
  IoIosPlay,
  IoIosSearch,
  IoIosSettings,
} from 'react-icons/io';
import './index.scss';

const Neumorphic = () => {
  useEffect(() => {
    /*  clock */
    const hours = document.querySelector<HTMLElement>('.hours');
    const minutes = document.querySelector<HTMLElement>('.minutes');
    const seconds = document.querySelector<HTMLElement>('.seconds');

    /*  play button */
    const play = document.querySelector<HTMLElement>('.play');
    const pause = document.querySelector<HTMLElement>('.pause');
    const playBtn = document.querySelector<HTMLElement>('.circle__btn');
    const wave1 = document.querySelector<HTMLElement>('.circle__back-1');
    const wave2 = document.querySelector<HTMLElement>('.circle__back-2');

    /*  rate slider */
    const container = document.querySelector<HTMLElement>('.slider__box');
    const btn = document.querySelector<HTMLElement>('.slider__btn');
    const color = document.querySelector<HTMLElement>('.slider__color');
    const tooltip = document.querySelector<HTMLElement>('.slider__tooltip');

    const clock = () => {
      const today = new Date();
      let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
      let m = today.getMinutes(); // 0 - 59
      let s = today.getSeconds(); // 0 - 59

      h *= 30; // 12 * 30 = 360deg
      m *= 6;
      s *= 6; // 60 * 6 = 360deg

      rotation(hours!, h);
      rotation(minutes!, m);
      rotation(seconds!, s);

      // call every second
      setTimeout(clock, 500);
    };

    // clock()

    const rotation = (target: HTMLElement, val: number) => {
      target.style.transform = `rotate(${val}deg)`;
    };

    const dragElement = (target: HTMLElement, btn: HTMLElement) => {
      target.addEventListener('mousedown', e => {
        onMouseMove(e);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });

      const onMouseMove = (e: MouseEvent) => {
        e.preventDefault();
        const targetRect = target.getBoundingClientRect();
        let x = e.pageX - targetRect.left + 10;
        if (x > targetRect.width) {
          x = targetRect.width;
        }

        if (x < 0) {
          x = 0;
        }

        btn.x = x - 10;
        btn.style.left = btn.x + 'px';

        // get the position of the button inside the container (%)
        const percentPosition = ((btn.x + 10) / targetRect.width) * 100;

        // color width = position of button (%)
        color.style.width = percentPosition + '%';

        // move the tooltip when button moves, and show the tooltip
        tooltip.style.left = btn.x - 5 + 'px';
        tooltip.style.opacity = 1;

        // show the percentage in the tooltip
        tooltip.textContent = Math.round(percentPosition) + '%';
      };

      const onMouseUp = (e: MouseEvent) => {
        window.removeEventListener('mousemove', onMouseMove);
        tooltip!.style.opacity = '0';

        btn.addEventListener('mouseover', function () {
          tooltip!.style.opacity = '1';
        });

        btn.addEventListener('mouseout', function () {
          tooltip!.style.opacity = '0';
        });
      };
    };

    dragElement(container!, btn!);

    /*  play button  */
    playBtn!.addEventListener('click', function (e) {
      e.preventDefault();
      pause!.classList.toggle('visibility');
      play!.classList.toggle('visibility');
      playBtn!.classList.toggle('shadow');
      wave1!.classList.toggle('paused');
      wave2!.classList.toggle('paused');
    });
  }, []);

  return (
    <div className="components">
      <div className="switch">
        <div className="switch__1">
          <input id="switch-1" type="checkbox" />
          <label htmlFor="switch-1" />
        </div>
        <div className="switch__2">
          <input id="switch-2" type="checkbox" defaultChecked />
          <label htmlFor="switch-2" />
        </div>
      </div>
      <div className="checkbox">
        <div className="checkbox__1">
          <input id="checkbox-1" type="checkbox" />
          <label htmlFor="checkbox-1">
            <i className="material-icons">done</i>
          </label>
        </div>
        <div className="checkbox__2">
          <input id="checkbox-2" type="checkbox" defaultChecked />
          <label htmlFor="checkbox-2">
            <i className="material-icons">done</i>
          </label>
        </div>
      </div>
      <div className="radio">
        <div className="radio__1">
          <input id="radio-1" type="radio" name="radio" defaultValue={1} />
          <label htmlFor="radio-1" />
        </div>
        <div className="radio__2">
          <input
            id="radio-2"
            type="radio"
            name="radio"
            defaultValue={2}
            defaultChecked
          />
          <label htmlFor="radio-2" />
        </div>
      </div>
      <div className="btn btn__primary">
        <p>Button</p>
      </div>
      <div className="btn btn__secondary">
        <p>Button</p>
      </div>
      <div className="clock">
        <div className="hand hours" />
        <div className="hand minutes" />
        <div className="hand seconds" />
        <div className="point" />
        <div className="marker">
          <span className="marker__1" />
          <span className="marker__2" />
          <span className="marker__3" />
          <span className="marker__4" />
        </div>
      </div>
      <div className="chip">
        <div className="chip__icon">
          <IoIosColorPalette />
        </div>
        <p>Neumorphic Design</p>
        <div className="chip__close">
          <IoIosClose />
        </div>
      </div>
      <div className="circle">
        <span className="circle__btn">
          <IoIosPause className="pause" />
          <IoIosPlay className="play" />
        </span>
        <span className="circle__back-1" />
        <span className="circle__back-2" />
      </div>
      <div className="form">
        <input
          type="text"
          className="form__input"
          placeholder="Type anything..."
        />
      </div>
      <div className="search">
        <input type="text" className="search__input" placeholder="Search..." />
        <div className="search__icon">
          <IoIosSearch />
        </div>
      </div>
      <div className="segmented-control">
        <input
          type="radio"
          name="radio2"
          defaultValue={3}
          id="tab-1"
          defaultChecked
        />
        <label htmlFor="tab-1" className="segmented-control__1">
          <p>Tab 1</p>
        </label>
        <input type="radio" name="radio2" defaultValue={4} id="tab-2" />
        <label htmlFor="tab-2" className="segmented-control__2">
          <p>Tab 2</p>
        </label>
        <input type="radio" name="radio2" defaultValue={5} id="tab-3" />
        <label htmlFor="tab-3" className="segmented-control__3">
          <p>Tab 3</p>
        </label>
        <div className="segmented-control__color" />
      </div>
      <div className="icon">
        <div className="icon__home">
          <IoIosHome />
        </div>
        <div className="icon__account">
          <IoIosPerson />
        </div>
        <div className="icon__settings">
          <IoIosSettings />
        </div>
      </div>
      <div className="slider">
        <div className="slider__box">
          <span className="slider__btn" id="find" />
          <span className="slider__color" />
          <span className="slider__tooltip">50%</span>
        </div>
      </div>
    </div>
  );
};

export default Neumorphic;
