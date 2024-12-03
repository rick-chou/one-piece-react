import { persistKey } from '@rickzhou/react-flow/store';
import { isEmpty } from 'lodash-es';
import { KEY_PREFIX } from 'redux-persist';
import { useFlowchart } from './useFlowchart';
import { useMock } from './useMock';

export const useInitFlowcharts = () => {
  const { flowcharts, addChart } = useFlowchart();
  const { data } = useMock();

  if (isEmpty(flowcharts)) {
    localStorage.removeItem(`${KEY_PREFIX}${persistKey}`);
    data.forEach(i => {
      addChart(i);
    });
  }
};
