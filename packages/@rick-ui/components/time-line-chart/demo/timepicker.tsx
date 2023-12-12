import { useTimeLineChart } from '@rickzhou/react-ui';
import {
  LINE_CHART_RECE_VOL_MOCK,
  LINE_CHART_SEND_VOL_MOCK,
} from '../../_util/mock';

export const App = () => {
  const { TimeLineChart, TimePicker } = useTimeLineChart({
    type: 'value',
    data: [
      { name: 'received volume', value: LINE_CHART_RECE_VOL_MOCK },
      { name: 'send volume', value: LINE_CHART_SEND_VOL_MOCK },
    ],
  });
  return (
    <div>
      <TimePicker />
      <TimeLineChart />
    </div>
  );
};
