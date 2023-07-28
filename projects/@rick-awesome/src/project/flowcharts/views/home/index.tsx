import { CheckCircleTwoTone, MoreOutlined } from '@ant-design/icons';
import { useFlowchart } from '@rick-flow/hooks/useFlowchart';
import { useMenus } from '@rick-flow/hooks/useMenus';
import { useMock } from '@rick-flow/hooks/useMock';
import { useNavigate } from '@rick-flow/hooks/useNavigate';
import { Action } from '@rick-flow/interface';
import { HomePreviewHeight } from '@rick-flow/styles';
import { Empty } from '@rickzhou/react-ui';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Dropdown,
  Modal,
  Popover,
} from 'antd';
import saveAs from 'file-saver';
import { useEffect } from 'react';
import { HiDownload, HiPlusSm } from 'react-icons/hi';
import FlowChart from '../flow';

const { WithEmpty } = Empty;

const Preview: React.FC<
  {
    id: string;
    onDelete: (id: string) => void;
  } & FlowProps
> = ({ selectable = false, selectedId, id, onDelete, setSelectedId }) => {
  const { getFlowchart } = useFlowchart();
  const chart = getFlowchart(id);
  const menu = useMenus(id, onDelete);
  return (
    <Card
      className="shadow"
      title={
        <div className="flex items-center">
          <Popover content={chart?.title}>
            <div className="mr-4 max-w-[300px] overflow-hidden text-ellipsis cursor-pointer">
              {chart?.title}
            </div>
          </Popover>
        </div>
      }
      bodyStyle={{ padding: 0, overflow: 'hidden' }}
      extra={
        selectable ? (
          <Checkbox
            checked={selectedId === chart.id}
            onChange={() => {
              setSelectedId?.(chart.id);
            }}
          />
        ) : (
          <Dropdown menu={{ items: menu }} placement="bottomLeft">
            <MoreOutlined className="cursor-pointer" />
          </Dropdown>
        )
      }>
      <div className="h-[20vh]">
        <WithEmpty data={chart} emptyProps={{ height: HomePreviewHeight }}>
          <FlowChart id={id} height={HomePreviewHeight} />
        </WithEmpty>
      </div>
    </Card>
  );
};

type FlowProps = {
  selectable?: boolean;
  selectedId?: string;
  setSelectedId?: (id: string) => void;
  onSave?: () => void;
};

const FlowHome: React.FC<FlowProps> = ({
  selectable = false,
  selectedId,
  setSelectedId,
  onSave,
}) => {
  const navigate = useNavigate();
  const { flowcharts, deleteChart } = useFlowchart();
  const { loading, mockLoadingFn } = useMock();

  useEffect(() => {
    void mockLoadingFn();
  }, [mockLoadingFn]);

  const props = {
    selectable,
    selectedId,
    setSelectedId,
  };

  const renderBtn = () => {
    if (selectable) {
      return (
        <Button icon={<CheckCircleTwoTone />} onClick={onSave}>
          Save
        </Button>
      );
    }

    return (
      <div className="flex justify-center items-center">
        <Button
          disabled
          className="flex items-center justify-center"
          onClick={() => {
            navigate(`./edit?action=${Action.add as string}`, {
              relative: 'path',
            });
          }}>
          <HiPlusSm />
          New
        </Button>

        <Divider type="vertical" />

        <Button
          disabled
          className="flex items-center justify-center"
          onClick={() => {
            Modal.confirm({
              title: 'Do you want to export these flowcharts ?',
              async onOk() {
                saveAs(
                  new Blob([JSON.stringify(flowcharts, null, 2)], {
                    type: 'application/json,charset=utf-8',
                  }),
                  `flowchart.json`,
                );
              },
            });
          }}>
          <HiDownload />
          Export
        </Button>
      </div>
    );
  };

  return (
    <div className="p-8 pr-0">
      <div className="flex items-center justify-between pr-8">
        <div className="flex items-center">
          <div className="font-bold text-xl mr-8">Flow Chart</div>
        </div>
        <div>{renderBtn()}</div>
      </div>

      <div className="pr-8">
        <Divider />
      </div>

      <WithEmpty
        // data={!loading || selectable}
        data={false}
        emptyProps={{ height: '60vh', desc: 'Roadmap' }}>
        {/* emptyProps={{ loading: !selectable, height: '60vh' }}> */}
        <div
          className={
            'grid grid-cols-2 gap-x-8 gap-y-12 pb-6 pr-8 h-[var(--layout-content-height)] overflow-scroll'
          }>
          {Object.keys(flowcharts).map(i => (
            <div key={i}>
              <Preview {...props} id={i} onDelete={deleteChart} />
            </div>
          ))}
        </div>
      </WithEmpty>
    </div>
  );
};

export default FlowHome;
