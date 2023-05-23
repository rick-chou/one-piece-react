import ReactECharts from 'echarts-for-react';

export type AnimationTextProps = {
  text: string;
  fontSize?: number;
  loop?: boolean;
  duration?: number;
  stroke?: string;
  fill?: string;
  style?: React.CSSProperties;
};

const AnimationText: React.FC<AnimationTextProps> = ({
  text,
  fontSize = 80,
  loop = true,
  duration = 3000,
  stroke = '#000',
  fill = '#000',
  style = {},
}) => {
  return (
    <ReactECharts
      style={style}
      option={{
        graphic: {
          elements: [
            {
              type: 'text',
              left: 'center',
              top: 'center',
              style: {
                text,
                fontSize,
                fontWeight: 'bold',
                lineDash: [0, 200],
                lineDashOffset: 0,
                fill: 'transparent',
                stroke,
                lineWidth: 1,
              },
              keyframeAnimation: {
                duration,
                loop,
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
                    // Stop for a while.
                    percent: 0.8,
                    style: {
                      fill: 'transparent',
                    },
                  },
                  {
                    percent: 1,
                    style: {
                      fill,
                    },
                  },
                ],
              },
            },
          ],
        },
      }}
    />
  );
};

export default AnimationText;
