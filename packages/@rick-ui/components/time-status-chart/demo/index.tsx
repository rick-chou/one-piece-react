import DisplayCard from '@/docs/card';
import { timeStatusChartData } from '@/mock';
import Cpn from '..';

export const Demo = () => {
  return (
    <DisplayCard>
      <Cpn data={timeStatusChartData} height="85vh" />
    </DisplayCard>
  );
};
