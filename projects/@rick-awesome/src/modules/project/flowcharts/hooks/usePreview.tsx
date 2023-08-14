import { type Execution } from '@/modules/project/flowcharts/interface';
import Flow from '@/modules/project/flowcharts/views/flow';
import { App } from 'antd';
import { useFlowchart } from './useFlowchart';

type Params = {
  id: string;
  executionNodes?: Execution['executionNodes'];
};

export const usePreview = () => {
  const { modal } = App.useApp();
  const { getFlowchart } = useFlowchart();

  const showFlowModal = ({ id, executionNodes = [] }: Params) => {
    const flow = getFlowchart(id);

    modal.info({
      icon: null,
      width: '80%',
      title: <div className="font-bold text-lg pl-6 pt-6">{flow.title}</div>,
      content: (
        <div className="p-6">
          <Flow id={id} executionNodes={executionNodes} height={'70vh'} />
        </div>
      ),
      footer: null,
      maskClosable: true,
      style: { padding: 0, height: '70vh' },
    });
  };

  return {
    showFlowModal,
  };
};
