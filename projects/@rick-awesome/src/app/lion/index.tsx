import Iframe from '@/components/iframe';
import { ContentWrapper, ThemeWrapper } from '@/theme';

const Lion = () => {
  return (
    <ThemeWrapper useBackground>
      <div className="h-[95vh] w-[65vw] p-6">
        <Iframe path={new URL('./app.html', import.meta.url).href} />
      </div>
    </ThemeWrapper>
  );
};

export default Lion;
