import Iframe from '@/components/iframe';

const ClimateDashboard = () => {
  return <Iframe path={new URL('./app.html', import.meta.url).href} />;
};

export default ClimateDashboard;
