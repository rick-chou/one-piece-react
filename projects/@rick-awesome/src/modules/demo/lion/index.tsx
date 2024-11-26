import Iframe from '@/components/iframe';

const Lion = () => {
  return <Iframe path={new URL('./app.html', import.meta.url).href} />;
};

export default Lion;
