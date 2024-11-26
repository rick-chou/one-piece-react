import Iframe from '@/components/iframe';
import { ThemeWrapper } from '@/theme';

const Lion = () => {
  return (
    <div className="h-[95vh] w-[65vw] hidden">
      <Iframe path={new URL('./app.html', import.meta.url).href} />
    </div>
  );
};

export default Lion;
