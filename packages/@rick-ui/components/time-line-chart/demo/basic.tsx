import { useTimeLineChart } from '@rickzhou/react-ui';
import { LINE_CHART_MOCK } from '../../_util/mock';

export const App = () => {
  const { TimeLineChart } = useTimeLineChart({
    type: 'category',
    yAxisName: 'resolution',
    data: [{ name: 'resolution', value: LINE_CHART_MOCK }],
    yAxisData: ['( 320, 180 )', '( 640, 360 )'],
  });
  return <TimeLineChart />;
};
