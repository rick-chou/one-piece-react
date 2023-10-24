import Iframe from '@/components/iframe';

const ClimateDashboard = () => {
  return <Iframe path={import.meta.resolve('./app.html')} />;
};

export default ClimateDashboard;
