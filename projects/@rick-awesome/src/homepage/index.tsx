import { animationDelay } from '@/layout/style';
import { html } from '../../README.md';

const Homepage = () => {
  return (
    <div
      css={animationDelay(0.1)}
      className="prose prose-slate overflow-y-scroll lg:prose-xl max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Homepage;
