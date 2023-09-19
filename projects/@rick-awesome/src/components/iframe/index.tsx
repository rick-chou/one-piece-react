import { ContentWrapper } from '@/theme';
import { type FC } from 'react';

type IframeProps = {
  path: string;
};

const Iframe: FC<IframeProps> = ({ path }) => {
  return (
    <ContentWrapper>
      <div className="rounded-2xl overflow-hidden w-full">
        <iframe src={path} width={'100%'} height={screen.height * 0.5} />
      </div>
    </ContentWrapper>
  );
};

export default Iframe;
