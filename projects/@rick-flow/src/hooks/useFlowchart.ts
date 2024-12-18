import { type FlowChartType } from '@rickzhou/react-flow/interface';
import { update } from '@rickzhou/react-flow/store/slice/flowchartSlice';
import { useCallback, useMemo } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useRickDispatch, useRickSelector } from './useStore';

export const useFlowchart = () => {
  const flowcharts = useRickSelector(state => state.flowcharts);
  const dispatch = useRickDispatch();

  const addChart = (data: FlowChartType) => {
    const id = uuidV4();
    dispatch(update({ type: 'add', data: { ...data, id: data.id ?? id } }));
    return id;
  };

  const updateChart = (data: FlowChartType, id: string) => {
    dispatch(update({ type: 'update', id, data }));
  };

  const deleteChart = (id: string) => {
    dispatch(update({ type: 'delete', id }));
  };

  const getFlowchart = (id: string) => {
    return flowcharts[id];
  };

  return {
    flowcharts: useMemo(() => flowcharts, [flowcharts]),
    getFlowchart: useCallback(getFlowchart, [flowcharts]),
    addChart: useCallback(addChart, [dispatch]),
    updateChart: useCallback(updateChart, [dispatch]),
    deleteChart: useCallback(deleteChart, [dispatch]),
  };
};
