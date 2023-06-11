import { type Execution } from '@/interface';
import { ContextModal } from '@/views';
import Flow from '@/views/flow';
import { FullscreenOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { useFlowchart } from './useFlowchart';

type Params = {
  id: string;
  executionNodes?: Execution['executionNodes'];
};

export const usePreview = () => {
  const ctxModal = useContext(ContextModal);
  const { getFlowchart } = useFlowchart();

  const showFlowModal = ({ id, executionNodes = [] }: Params) => {
    const flow = getFlowchart(id);

    ctxModal.info({
      icon: null,
      centered: true,
      width: '80%',
      title: (
        <div className="flex w-full justify-between items-center">
          <div className="font-bold text-lg">{flow.title}</div>
          <FullscreenOutlined
            className="cursor-pointer text-blue-500"
            onClick={() =>
              window.open(`${import.meta.env.BASE_URL}flow/${flow.id}`)
            }
          />
        </div>
      ),
      content: <Flow id={id} executionNodes={executionNodes} height={'70vh'} />,
      footer: null,
      maskClosable: true,
      style: { padding: 0, height: '70vh' },
    });
  };

  return {
    showFlowModal,
  };
};
