import { AreaChartOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { App, Button, Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import deepmerge from 'deepmerge';
import * as echarts from 'echarts';
import { isEmpty } from 'lodash-es';
import { useMemo, useRef, type ReactElement } from 'react';
import { format_time_status_chart_tooltip } from '../_util/chart';
import {
  CHART_HEIGHT,
  TIME_STATUS_CHART_COLOR,
  TIME_STATUS_CHART_MAX_Y_ITEM_SIZE,
} from '../_util/config';
import { timestampToDateString } from '../_util/date';
import { type CommonChartProps } from '../_util/type';
import Chart from '../chart';
import Empty from '../empty';

export type TimeStatusChartProps<T = any> = {
  data: Array<TimeStatusChartItem<T>>;
  option?: echarts.EChartsOption;
  seriesOption?: echarts.CustomSeriesOption;
  maxSize?: number;
  tooltipTitle?: string;
  showEmpty?: boolean;
  showDot?: boolean;
  showCnt?: boolean;
  triggerEvent?: boolean;
  triggerEventInfoFn?: (params: TimeStatusChartItem<T>) => void;
  onInit?: (instance: echarts.ECharts) => void;
};

export type TimeStatusChartItem<T = any> = {
  startTime: number;
  endTime: number;
  state: string;
  extra?: T;
  infer?: boolean;
};

const genChartSize = (size: number) => {
  return size < 3 ? 4 : 2;
};

type Value = [string, number, number, boolean, any];
type DataRecord = {
  itemStyle: { color: string };
  name: string;
  value: Value;
};

const genInnerState = (data: TimeStatusChartItem[], showDot: boolean) => {
  const innerData: DataRecord[] = [];
  const yAxisSet = new Set<string>();
  const dot: Array<[number, string, any]> = [];
  data.forEach(item => {
    if (item.startTime === item.endTime) {
      if (showDot) {
        dot.push([item.startTime, item.state, item.extra]);
        yAxisSet.add(item.state);
      }
    } else {
      yAxisSet.add(item.state);
      innerData.push({
        itemStyle: {
          color: TIME_STATUS_CHART_COLOR,
        },
        name: item.state,
        value: [
          item.state,
          item.startTime,
          item.endTime,
          item.infer!,
          item.extra,
        ],
      });
    }
  });
  return { innerData, yAxis: Array.from(yAxisSet), dot };
};

const TimeStatusChart = <T = any,>({
  data = [],
  option,
  seriesOption,
  height = CHART_HEIGHT,
  width = '100%',
  maxSize = TIME_STATUS_CHART_MAX_Y_ITEM_SIZE,
  xAxisMin,
  xAxisMax,
  tooltipTitle = '',
  showEmpty = true,
  showDot = false,
  showCnt = true,
  triggerEvent = false,
  triggerEventInfoFn,
  onInit,
}: CommonChartProps & TimeStatusChartProps<T>): ReactElement => {
  const { modal } = App.useApp();

  const echartsInstance = useRef<echarts.ECharts>();

  const destroyModal = useRef<() => void>();

  const columns: ColumnsType<TimeStatusChartItem> = [
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      render(value) {
        return timestampToDateString(value);
      },
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      render(value) {
        return timestampToDateString(value);
      },
    },
    {
      title: 'Duration',
      render(_, record) {
        const millisecond = dayjs
          .utc(record.endTime)
          .diff(dayjs.utc(record.startTime), 'millisecond');
        const m = Math.trunc(millisecond / (1000 * 60));
        const s = Math.trunc((millisecond / 1000) % 60);
        const ms = millisecond % 1000;
        return `${m}min ${s}s ${ms}ms`;
      },
    },
    {
      title: 'Action',
      align: 'center',
      width: 200,
      render(_, record) {
        return (
          <>
            {Boolean(triggerEventInfoFn) && (
              <>
                <Button
                  icon={<InfoCircleOutlined className="text-blue-500" />}
                  onClick={() => {
                    triggerEventInfoFn?.(record);
                  }}
                />
                <Divider type="vertical" />
              </>
            )}
            <Button
              icon={<AreaChartOutlined className="text-blue-500" />}
              onClick={() => {
                destroyModal.current?.();
                echartsInstance.current?.dispatchAction({
                  type: 'dataZoom',
                  startValue: record.startTime,
                  endValue: record.endTime,
                  dataZoomIndex: 0,
                });
              }}
            />
          </>
        );
      },
    },
  ];

  const innerOption: echarts.EChartsOption = useMemo(() => {
    const { innerData, yAxis, dot } = genInnerState(data, showDot);

    const _options: echarts.EChartsOption = {
      tooltip: {
        formatter: params =>
          format_time_status_chart_tooltip(params, tooltipTitle),
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
        right: 20,
      },
      dataZoom: [
        {
          xAxisIndex: 0,
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
          show: yAxis.length > maxSize,
          end: ((maxSize - 1) / yAxis.length) * 100,
          zoomLock: yAxis.length > maxSize,
          showDetail: false,
          brushSelect: false,
        },
        {
          disabled: yAxis.length <= maxSize,
          show: yAxis.length > maxSize,
          type: 'inside',
          yAxisIndex: 0,
          zoomOnMouseWheel: false,
          moveOnMouseMove: true,
          moveOnMouseWheel: true,
        },
      ],
      grid: {
        left: 10,
        right: yAxis.length > maxSize ? 100 : 40,
        top: 50,
        bottom: 50,
        containLabel: true,
      },
      xAxis: {
        type: 'time',
        min: Number.isFinite(xAxisMin) ? xAxisMin : undefined,
        max: Number.isFinite(xAxisMax) ? xAxisMax : undefined,
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
          overflow: triggerEvent ? 'break' : 'breakAll',
          width: 100,
          formatter(value) {
            return (
              '{value|' +
              value +
              '}' +
              '{count| (' +
              data.filter(i => i.state === value).length +
              ')}'
            );
          },
          rich: {
            value: {
              color: '#333',
            },
            count: {
              fontSize: showCnt ? 12 : 0,
              color: '#FF0000',
            },
          },
        },
        triggerEvent,
      },
      series: [
        {
          type: 'custom',
          renderItem(params: any, api: any) {
            const categoryIndex = api.value(0);
            const isInfer = api.value(3);
            const start = api.coord([api.value(1), categoryIndex]);
            const end = api.coord([api.value(2), categoryIndex]);
            const height = api.size([0, 1])[1];
            return {
              type: 'rect',
              shape: echarts.graphic.clipRectByRect(
                {
                  x: start[0],
                  y: start[1] - height / (genChartSize(yAxis.length) * 2),
                  width: end[0] - start[0],
                  height: height / genChartSize(yAxis.length),
                },
                {
                  x: params.coordSys.x,
                  y: params.coordSys.y,
                  width: params.coordSys.width,
                  height: params.coordSys.height,
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
          data: innerData,
          ...(seriesOption ?? {}),
        },
        {
          symbolSize: 20,
          data: dot,
          type: 'scatter',
          itemStyle: {
            color: TIME_STATUS_CHART_COLOR,
            shadowColor: '#ccc',
            shadowBlur: 10,
          },
        },
      ],
    };
    return deepmerge(_options, option ?? {});
  }, [
    data,
    maxSize,
    option,
    seriesOption,
    showCnt,
    showDot,
    tooltipTitle,
    triggerEvent,
    xAxisMax,
    xAxisMin,
  ]);

  const bindEvents = (chartInstance: echarts.ECharts) => {
    echartsInstance.current = chartInstance;

    if (triggerEvent) {
      chartInstance.on('click', (params: any) => {
        if (params.componentType === 'yAxis') {
          const _data = data.filter(i => i.state === params.value);
          const { destroy } = modal.info({
            icon: null,
            width: '80%',
            title: null,
            centered: true,
            content: (
              <div>
                <div className="text-base font-bold mb-4">{params.value}</div>
                <Table
                  bordered
                  scroll={{ y: '60vh' }}
                  columns={columns}
                  rowKey={i => i.startTime}
                  dataSource={_data}
                />
              </div>
            ),
            footer: null,
            maskClosable: true,
          });
          destroyModal.current = destroy;
        }
      });
    }
  };

  if (isEmpty(data)) {
    if (showEmpty) {
      return <Empty height={height} />;
    }

    return <></>;
  }

  return (
    <Chart
      option={innerOption}
      onChartReady={instance => {
        bindEvents(instance);
        onInit?.(instance);
      }}
      style={{ height, width }}
    />
  );
};

export default TimeStatusChart;
