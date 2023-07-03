import { useEffect } from 'react';
import { FlipDown } from './flipdown';

const Countdown = () => {
  useEffect(() => {
    new FlipDown(1538137672).start();
  }, []);

  return <div id="flipdown" className="flipdown"></div>;
};

export default Countdown;
