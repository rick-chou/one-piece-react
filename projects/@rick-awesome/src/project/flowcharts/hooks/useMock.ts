import { flowchartsMock } from '@/project/flowcharts/mock';
import { sleep } from '@/project/flowcharts/utils/sleep';
import { useCallback, useMemo } from 'react';
import { useLoading } from './useLoading';

export const useMock = () => {
  const { loading, showLoading, hideLoading } = useLoading();

  const mockLoadingFn = async () => {
    showLoading();
    await sleep(1000);
    hideLoading();
    return true;
  };

  return {
    data: useMemo(() => flowchartsMock, []),
    mockLoadingFn: useCallback(mockLoadingFn, [hideLoading, showLoading]),
    loading,
  };
};
