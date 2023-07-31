import { ContextModal } from '@/modules/project/flowcharts/index';
import { type Execution } from '@/modules/project/flowcharts/interface';
import { isPwaMode } from '@/modules/project/flowcharts/utils/isPwaMode';
import Flow from '@/modules/project/flowcharts/views/flow';
import { FullscreenOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { useFlowchart } from './useFlowchart';
import { useNavigate } from './useNavigate';

type Params = {
  id: string;
  executionNodes?: Execution['executionNodes'];
};

export const usePreview = () => {
  const ctxModal = useContext(ContextModal);
  const { getFlowchart } = useFlowchart();

  const navigate = useNavigate();

  const showFlowModal = ({ id, executionNodes = [] }: Params) => {
    const flow = getFlowchart(id);

    const { destroy } = ctxModal.info({
      icon: null,
      centered: true,
      width: '80%',
      title: (
        <div className="flex w-full justify-between items-center">
          <div className="font-bold text-lg">{flow.title}</div>
          <FullscreenOutlined
            className="cursor-pointer text-blue-500"
            onClick={() => {
              const target = `${import.meta.env.BASE_URL}flow/${flow.id}`;
              destroy();
              if (isPwaMode()) {
                navigate(target);
              } else {
                window.open(target);
              }
            }}
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
