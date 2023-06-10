import { Chart } from '@rickzhou/react-ui';
import { name } from '../../package.json';

const Sign = () => {
  return (
    <Chart
      style={{ height: '20vh', width: '100vh' }}
      option={
        {
          graphic: {
            elements: [
              {
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                  text: name.toUpperCase(),
                  fontSize: 50,
                  fontFamily: 'ui-serif',
                  fontWeight: 'bold',
                  lineDash: [0, 200],
                  lineDashOffset: 1,
                  fill: 'transparent',
                  stroke: '#6EAAFF',
                  lineWidth: 2,
                  textShadowBlur: 2,
                  textShadowColor: '#BCC3CC',
                  textShadowOffsetX: 2,
                  textShadowOffsetY: 2,
                },
                keyframeAnimation: {
                  duration: 3000,
                  loop: false,
                  keyframes: [
                    {
                      percent: 0.7,
                      style: {
                        fill: 'transparent',
                        lineDashOffset: 200,
                        lineDash: [200, 0],
                      },
                    },
                    {
                      percent: 1,
                      style: {
                        fill: '#6EAAFF',
                      },
                    },
                  ],
                },
              },
            ],
          },
        } as echarts.EChartsOption
      }
    />
  );
};

export default Sign;
