import { type EmptyProps } from '../empty';

export type DataType<T = any> = {
  /**
   * Item start time
   */
  startTime: number;
  /**
   * Item end time
   */
  endTime: number;
  /**
   * Item state
   */
  state: string;
  /**
   * Extra data
   *
   * E.g. You can use it to customize tooltip
   */
  extra?: T;
  /**
   * If this value is true, this item will be rendered in other color and dashed lines
   *
   * E.g. If you are not sure if the state is true at this point in time, you can use this prop
   *
   * @default false
   */
  infer?: boolean;
};

export type TimeStatusChartProps<T = any> = {
  /**
   * Datasource
   * @default []
   */
  data: Array<DataType<T>>;
  /**
   * Custom echarts option
   */
  globalOption?: echarts.EChartsOption;
  option?: echarts.CustomSeriesOption;
  /**
   * @default 40vh
   */
  height?: string;
  /**
   * @default 100%
   */
  width?: string;
  /**
   * Maximum number of visible yAxis
   *
   * If exceeded, datazoom tools will be displayed
   * @default 10
   */
  maxColumns?: number;
  /**
   * Min timestamp for xAxis
   */
  min?: number;
  /**
   * Max timestamp for xAxis
   */
  max?: number;
  /**
   * Tooltip card title
   */
  tooltipTitle?: string;
  emptyProps?: {
    show?: boolean;
  } & EmptyProps;
  /**
   * You can get echarts instance by this callback fn
   */
  onInit?: (instance: echarts.ECharts) => void;
};

export type CustomSeriesRenderItemParams = {
  coordSys: {
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
  };
} & echarts.CustomSeriesRenderItemParams;

export type ChartDataType = {
  itemStyle: { color: string };
  name: string;
  /**
   * [y-axis label, start timestamp, end timestamp, infer, extra]
   */
  value: [string, number, number, boolean, any];
};
