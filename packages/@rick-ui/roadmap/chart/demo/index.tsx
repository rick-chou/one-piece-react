import DisplayCard from '@/docs/card';
import Cpn from '..';

export const Demo = () => {
  return (
    <DisplayCard>
      <Cpn
        style={{ height: '85vh' }}
        option={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none',
              },
              restore: {},
              saveAsImage: {},
            },
          },
          dataZoom: [
            {
              type: 'inside',
            },
            {
              type: 'slider',
            },
          ],
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true,
            },
          ],
        }}
      />
    </DisplayCard>
  );
};
