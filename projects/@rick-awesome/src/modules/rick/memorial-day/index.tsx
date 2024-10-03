import { useTheme } from '@/hooks/useTheme';
import { ContentWrapper } from '@/theme';
import { memo, useEffect, useRef } from 'react';
import { FlipDown } from './flipdown';
import { flipdownStyle } from './style';

const Countdown = () => {
  const instance = useRef<FlipDown>();
  const { inverseTheme } = useTheme();

  useEffect(() => {
    instance.current = new FlipDown(
      Number(new Date('2024-11-24')) / 1000,
    ).start();
  }, []);

  return (
    <ContentWrapper>
      <div className="text-4xl mb-8 font-bold italic">
        The first anniversary of marriage in
      </div>
      <div css={flipdownStyle}>
        <div
          id="flipdown"
          className={`flipdown flipdown__theme-${inverseTheme}`}></div>
      </div>
    </ContentWrapper>
  );
};

export default memo(Countdown);
