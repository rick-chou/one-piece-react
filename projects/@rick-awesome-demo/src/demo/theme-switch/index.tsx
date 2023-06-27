/**
 * @link https://codepen.io/isaaclouzeiro/pen/YzRzmwQ
 */

import { useEffect } from 'react';

const ThemeSwitch = () => {
  useEffect(() => {
    const mainContent = document.getElementById('main');
    const switchBTN = document.getElementById('switch');

    function clickEvent() {
      if (mainContent.classList.contains('main--light')) {
        mainContent.classList.remove('main--light');
        mainContent.classList.add('main--dark');
      } else {
        mainContent.classList.remove('main--dark');
        mainContent.classList.add('main--light');
      }
    }

    switchBTN.addEventListener('click', clickEvent);
  }, []);

  return (
    <>
      <section className="main main--light" id="main">
        <span className="text text--light">Light</span>
        <span className="text text--dark">Dark</span>

        <button type="button" id="switch">
          <i className="bx bxs-sun"></i>
          <span className="btn-switch"></span>
          <i className="bx bxs-moon"></i>
        </button>
      </section>
    </>
  );
};

export default ThemeSwitch;
