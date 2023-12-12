import type * as echarts from 'echarts';
import type { EChartsReactProps } from 'echarts-for-react';
import ReactECharts from 'echarts-for-react';
import { useRef, useState } from 'react';

const Chart: React.FC<EChartsReactProps> = props => {
  const echartsContainer = useRef<HTMLDivElement>(null);
  const echartsInstance = useRef<echarts.ECharts>();
  const [dataZoomSelect, setDataZoomSelect] = useState(true);

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
      className="w-full focus:outline-none"
      ref={echartsContainer}
      tabIndex={-1}
      onClick={() => echartsContainer.current?.focus()}
      onKeyDown={e => {
        bindChartHotKey(e, echartsInstance.current!);
      }}>
      <ReactECharts
        {...props}
        onChartReady={(instance: echarts.ECharts) => {
          setTimeout(() => {
            instance.resize();
          }, 100);
          echartsInstance.current = instance;
          props.onChartReady?.(instance);
          bindDataZoomEvent(instance, dataZoomSelect);
          instance.on('restore', () => {
            bindDataZoomEvent(instance, dataZoomSelect);
          });
        }}
        notMerge
      />
    </div>
  );
};

export default Chart;
