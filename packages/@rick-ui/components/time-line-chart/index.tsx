import type { ECharts, EChartsOption, LineSeriesOption } from 'echarts';
import { first, isArray, isEmpty, isEqual, uniqWith } from 'lodash';
import { useCallback, useRef } from 'react';
import { BASE_LINE_OPTION, CHART_HEIGHT } from '../_util/config';
import { timestampToDateString } from '../_util/date';
import { type CommonChartProps, type timestamp } from '../_util/type';
import Chart from '../chart';
import Empty from '../empty';
import InternalTimePicker from '../time-picker';

const { WithEmpty } = Empty;

export type TimeLineChartProps = CommonChartProps & {
  data?: Array<{ name: string; value: Array<[timestamp, number | string]> }>;
  yAxisData?: string[];
  refreshToken?: any;
  option?: EChartsOption;
  type: 'value' | 'category';
  onChartReady?: (echartInstance: ECharts) => void;
};

const useOption: (props: TimeLineChartProps) => EChartsOption = ({
  yAxisName = '',
  data,
  yAxisData,
  xAxisMax,
  xAxisMin,
  option,
  type,
}) => {
  if (option) return option;

  if (isEmpty(data) || !isArray(data)) {
    console.warn(`please pass a non-empty array, data : `, data);
    return {};
  }

  return {
    ...BASE_LINE_OPTION,
    tooltip: {
      ...BASE_LINE_OPTION.tooltip,
      trigger: data.length > 1 ? 'axis' : 'item',
      axisPointer: {
        type: type === 'category' ? 'cross' : 'line',
        label: {
          precision: 2,
          formatter(params) {
            if (params.axisDimension === 'y') {
              return `${params.value as string}`;
            }

            return `${timestampToDateString(params.value as number)}`;
          },
        },
      },
    },
    legend: {
      show: data.length > 1,
    },
    xAxis: {
      type: 'time',
      max: xAxisMax,
      min: xAxisMin,
      axisLabel: {
        showMinLabel: true,
        showMaxLabel: true,
        formatter(value: number) {
          return timestampToDateString(value, 'HH:mm:ss');
        },
      },
    },
    yAxis: {
      type,
      name: yAxisName,
      data: yAxisData,
    },
    series: data.map(i => ({
      type: 'line',
      smooth: true,
      name: i.name,
      data: uniqWith(i.value, isEqual).sort(
        (i, j) => Number(first(i)) - Number(first(j)),
      ),
    })),
  };
};

const useMaxAndMinTime = (props: TimeLineChartProps) => {
  if (props.xAxisMin && props.xAxisMax) {
    return [props.xAxisMin, props.xAxisMax];
  }

  if (!isEmpty(props.data)) {
    const times = props
      .data!.map(i => i.value?.map(i => first(i)!))
      ?.flat() as number[];
    const min = Math.min(...times);
    const max = Math.max(...times);
    return [min, max];
  }

  if (!isEmpty(props.option)) {
    const times = (props.option.series as LineSeriesOption[])
      ?.map(i => i.data?.map((i: any) => first(i)!))
      ?.flat() as number[];
    const min = Math.min(...times);
    const max = Math.max(...times);
    return [min, max];
  }

  return [];
};

const useTimeLineChart = (props: TimeLineChartProps) => {
  const instance = useRef<ECharts>();
  const option = useOption(props);
  const [min, max] = useMaxAndMinTime(props);

  const TimeLineChart = useCallback(() => {
    return (
      <WithEmpty data={option} props={{ height: CHART_HEIGHT }}>
        <Chart
          option={option}
          style={{ height: props.height ?? CHART_HEIGHT, width: '100%' }}
          onChartReady={i => {
            props?.onChartReady?.(i);
            instance.current = i;
          }}
        />
      </WithEmpty>
    );
  }, [option, props]);

  const TimePicker = useCallback(() => {
    return (
      <WithEmpty data={Boolean(min) && Boolean(max)} showEmpty={false}>
        <InternalTimePicker
          currentTime={[min, max]}
          refreshToken={props.refreshToken}
          onChange={(min, max) => {
            instance.current?.dispatchAction({
              type: 'dataZoom',
              startValue: min,
              endValue: max,
            });
          }}
        />
      </WithEmpty>
    );
  }, [min, max, props.refreshToken]);

  return {
    TimeLineChart,
    TimePicker,
  };
};

export default useTimeLineChart;
