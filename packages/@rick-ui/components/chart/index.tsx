import type echarts from 'echarts';
import ReactECharts, { type EChartsReactProps } from 'echarts-for-react';
import { useCallback, useRef, useState } from 'react';

export type ChartProps = EChartsReactProps;

const Chart: React.FC<ChartProps> = props => {
  const { onChartReady } = props;
  const echartsContainer = useRef<HTMLDivElement>(null);
  const echartsInstance = useRef<echarts.ECharts>();
  const [dataZoomSelect, setDataZoomSelect] = useState(true);

  const _onChartReady = useCallback(
    (instance: echarts.ECharts) => {
      echartsInstance.current = instance;
      onChartReady?.(instance);
      bindDataZoomEvent(instance, dataZoomSelect);
      instance.on('restore', () => {
        bindDataZoomEvent(instance, dataZoomSelect);
      });
    },
    [dataZoomSelect, onChartReady],
  );

  const bindDataZoomEvent = (
    echartsInstance: echarts.ECharts,
    dataZoomSelect: boolean,
  ) => {
    setTimeout(() => {
      echartsInstance?.dispatchAction({
        type: 'takeGlobalCursor',
        key: 'dataZoomSelect',
        dataZoomSelectActive: dataZoomSelect,
      });
    }, 300);
  };

  const bindChartHotKey = (
    event: React.KeyboardEvent<HTMLDivElement>,
    chart: echarts.ECharts,
  ) => {
    if (event.key === 'r') {
      chart.dispatchAction({
        type: 'restore',
      });
    }

    if (event.key === 'z') {
      chart.dispatchAction({
        type: 'takeGlobalCursor',
        key: 'dataZoomSelect',
        dataZoomSelectActive: !dataZoomSelect,
      });
      setDataZoomSelect(!dataZoomSelect);
    }
  };

  return (
    <div
      className="w-full h-full focus:outline-none"
      ref={echartsContainer}
      tabIndex={-1}
      onClick={() => echartsContainer.current?.focus()}
      onKeyDown={e => {
        console.log('echartsContainer', echartsInstance.current);
        if (echartsInstance.current) {
          bindChartHotKey(e, echartsInstance.current);
        }
      }}>
      <ReactECharts notMerge {...props} onChartReady={_onChartReady} />
    </div>
  );
};

export default Chart;
