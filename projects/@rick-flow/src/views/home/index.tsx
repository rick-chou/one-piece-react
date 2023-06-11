import { useFlowchart } from '@/hooks/useFlowchart';
import { useMenus } from '@/hooks/useMenus';
import { useMock } from '@/hooks/useMock';
import { Action } from '@/interface';
import { HomePreviewHeight } from '@/styles';
import {
  CheckCircleTwoTone,
  ExportOutlined,
  MoreOutlined,
  PlusCircleTwoTone,
} from '@ant-design/icons';
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
import { useNavigate } from 'react-router-dom';
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
      className=" shadow shadow-blue-200"
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
      <div className="h-[35vh]">
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
      <>
        <Button
          icon={<PlusCircleTwoTone />}
          onClick={() => {
            navigate(`${import.meta.env.BASE_URL}edit?action=${Action.add}`);
          }}>
          New
        </Button>

        <Divider type="vertical" />

        <Button
          icon={<ExportOutlined className="text-[#1890ff]" />}
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
          Export
        </Button>
      </>
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
        data={!loading || selectable}
        emptyProps={{ loading: !selectable, height: 'calc(100vh - 150px)' }}>
        <div
          className={`grid grid-cols-2 gap-x-8 gap-y-12 overflow-scroll pb-6 pr-8 ${
            selectable ? 'h-[calc(80vh-150px)]' : 'h-[calc(100vh-150px)]'
          } `}>
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
