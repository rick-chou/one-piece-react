import {
  formatTimeStatusChartTooltip,
  timestampToDateString,
} from '@rickzhou/react-utils';
import deepmerge from 'deepmerge';
import * as echarts from 'echarts';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import Chart from '../chart';
import Empty from '../empty';
import {
  type ChartDataType,
  type CustomSeriesRenderItemParams,
  type TimeStatusChartProps,
} from './interface';

const MaxColumns = 10;
const Color = '#fac858';

export type { ChartDataType, TimeStatusChartProps } from './interface';

const TimeStatusChart: React.FC<TimeStatusChartProps> = ({
  data = [],
  option = {},
  globalOption = {},
  maxColumns = MaxColumns,
  min,
  max,
  tooltipTitle = '',
  emptyProps = {
    show: true,
    height: '40vh',
  },
  height = '40vh',
  width = '100%',
  onInit,
}) => {
  const [_options, setOptions] = useState<echarts.EChartsOption>({});

  useEffect(() => {
    const generateOptions = (): echarts.EChartsOption => {
      const result: ChartDataType[] = [];
      const yAxisSet = new Set<string>();
      data.forEach(x => yAxisSet.add(x.state));
      const yAxis = Array.from(yAxisSet);
      data.forEach(item => {
        result.push({
          itemStyle: { color: Color },
          name: item.state,
          value: [
            item.state,
            item.startTime,
            item.endTime,
            item.infer ?? false,
            item.extra,
          ],
        });
      });

      const _options: echarts.EChartsOption = {
        tooltip: {
          formatter: params =>
            formatTimeStatusChartTooltip(params, tooltipTitle),
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
          right: yAxis.length > maxColumns ? 80 : 40,
        },
        dataZoom: [
          {
            type: 'slider',
            filterMode: 'weakFilter',
            showDataShadow: false,
            showDetail: false,
            bottom: 10,
            labelFormatter(value: number) {
              return timestampToDateString(value, 'HH:mm:ss');
            },
          },
          {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'weakFilter',
            right: 20,
            show: yAxis.length > maxColumns,
            end: ((maxColumns - 1) / yAxis.length) * 100,
            zoomLock: yAxis.length > maxColumns,
            showDetail: false,
            brushSelect: false,
          },
        ],
        grid: {
          left: 10,
          right: yAxis.length > maxColumns ? 100 : 40,
          top: 50,
          bottom: 50,
          containLabel: true,
        },
        xAxis: {
          type: 'time',
          min: Number.isFinite(min) ? min : undefined,
          max: Number.isFinite(max) ? max : undefined,
          axisLabel: {
            showMinLabel: true,
            showMaxLabel: true,
            formatter(value: number) {
              return timestampToDateString(value, 'HH:mm:ss');
            },
          },
          splitNumber: 5,
          splitLine: {
            interval: 0,
            show: true,
            lineStyle: {
              type: 'dashed',
            },
          },
        },
        yAxis: {
          type: 'category',
          data: yAxis,
          axisLabel: {
            rotate: -20,
            overflow: 'breakAll',
            width: 100,
          },
          triggerEvent: true,
        },
        series: [
          {
            type: 'custom',
            renderItem(params, api) {
              const { coordSys } = params as CustomSeriesRenderItemParams;
              const categoryIndex = api.value(0);
              const isInfer = api.value(3);
              const start = api.coord([api.value(1), categoryIndex]);
              const end = api.coord([api.value(2), categoryIndex]);
              const height = (api.size!([0, 1]) as number[])[1];
              return {
                type: 'rect',
                shape: echarts.graphic.clipRectByRect(
                  {
                    x: start[0],
                    y: start[1] - height / 10,
                    width: end[0] - start[0],
                    height: height / 5,
                  },
                  {
                    x: coordSys.x,
                    y: coordSys.y,
                    width: coordSys.width,
                    height: coordSys.height,
                  },
                ),
                style: {
                  fill: api.visual('color'),
                  fillOpacity: isInfer ? 0.2 : 1,
                  stroke: isInfer ? '#fff' : 'transparent',
                  strokeOpacity: 0.8,
                  shadowColor: '#ccc',
                  shadowBlur: 10,
                  lineWidth: 2,
                  lineDash: 'dashed',
                },
              };
            },
            encode: {
              x: [1, 2],
              y: 0,
            },
            data: result,
            ...option,
          },
        ],
      };
      return deepmerge(_options, globalOption);
    };

    setOptions(generateOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, min, max, maxColumns, tooltipTitle]);

  if (isEmpty(data)) {
    return emptyProps.show ? <Empty height={emptyProps.height} /> : null;
  }

  return (
    <Chart
      option={_options}
      onChartReady={(instance: echarts.ECharts) => onInit?.(instance)}
      style={{ height, width }}
    />
  );
};

export default TimeStatusChart;
