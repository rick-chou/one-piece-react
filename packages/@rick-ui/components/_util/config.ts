import { type EChartsOption } from 'echarts';
import { format_line_tooltip } from './chart';
import { timestampToDateString } from './date';

export const CHART_HEIGHT = '600px';

export const TIME_STATUS_CHART_COLOR = '#fac858';
export const TIME_STATUS_CHART_MAX_Y_ITEM_SIZE = 8;

export const BASE_LINE_OPTION: EChartsOption = {
  tooltip: {
    formatter: format_line_tooltip,
  },
  grid: {
    left: '3%',
    right: '5%',
    bottom: '15%',
    containLabel: true,
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
      },
      restore: {},
      saveAsImage: {},
    },
    right: '3%',
  },
  dataZoom: [
    {
      type: 'slider',
      filterMode: 'weakFilter',
      showDataShadow: true,
      labelFormatter(value: number) {
        return timestampToDateString(value, 'HH:mm:ss');
      },
    },
  ],
};
