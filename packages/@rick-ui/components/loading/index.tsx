import ReactECharts from 'echarts-for-react';

export type LoadingProps = {
  count?: number;
  fill?: string;
  duration?: number;
  delay?: number;
  item?: {
    width?: number;
    height?: number;
  };
  loop?: boolean;
  style?: React.CSSProperties;
};

const Loading: React.FC<LoadingProps> = ({
  count = 7,
  fill = '#5470c6',
  duration = 1000,
  delay = 200,
  item = {
    width: 10,
    height: 80,
  },
  loop = true,
  style = {},
}) => {
  return (
    <ReactECharts
      style={style}
      option={{
        graphic: {
          elements: [
            {
              type: 'group',
              left: 'center',
              top: 'center',
              children: new Array(count).fill(0).map((_, i) => ({
                type: 'rect',
                x: i * item.width! * 2,
                shape: {
                  x: 0,
                  y: -(item.height! / 2),
                  width: item.width,
                  height: item.height,
                },
                style: {
                  fill,
                },
                keyframeAnimation: {
                  duration,
                  delay: i * delay,
                  loop,
                  keyframes: [
                    {
                      percent: 0.5,
                      scaleY: 0.3,
                      easing: 'cubicIn',
                    },
                    {
                      percent: 1,
                      scaleY: 1,
                      easing: 'cubicOut',
                    },
                  ],
                },
              })),
            },
          ],
        },
      }}
    />
  );
};

export default Loading;
