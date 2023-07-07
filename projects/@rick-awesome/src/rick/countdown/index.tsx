import { useTheme } from '@/hooks/useTheme';
import { ContentWrapper } from '@/theme';
import { memo, useEffect, useRef } from 'react';
import { FlipDown } from './flipdown';

const Countdown = () => {
  const instance = useRef<FlipDown>();
  const { inverseTheme } = useTheme();

  useEffect(() => {
    instance.current = new FlipDown(
      Number(new Date('2023-11-24')) / 1000,
    ).start();
  }, []);

  return (
    <ContentWrapper>
      <div className="text-8xl mb-4 font-bold italic">Wedding In</div>
      <div
        id="flipdown"
        className={`flipdown flipdown__theme-${inverseTheme}`}></div>
    </ContentWrapper>
  );
};

export default memo(Countdown);
