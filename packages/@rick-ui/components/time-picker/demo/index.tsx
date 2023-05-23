import DisplayCard from '@/docs/card';
import { Alert } from 'antd';
import dayjs from 'dayjs';
import Cpn, { type TimePickerProps } from '..';

const pattern = 'YYYY-MM-DD:HH:mm:ss';

const onChange: TimePickerProps['onChange'] = (date, dateStr) => {
  console.log('date>>', date);
  console.log('dateStr>>', dateStr);
};

export const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Alert message="Open console to see output" type="info" showIcon />
      <DisplayCard title="Default">
        <Cpn
          startTime={dayjs('2018-02-09:13:14:00', pattern).valueOf()}
          endTime={dayjs('2018-02-10:13:14:00', pattern).valueOf()}
          onChange={onChange}
        />
      </DisplayCard>

      <DisplayCard title="ShowReset">
        <Cpn
          showReset={false}
          startTime={dayjs('2018-02-09:13:14:00', pattern).valueOf()}
          endTime={dayjs('2018-02-10:13:14:00', pattern).valueOf()}
          onChange={onChange}
        />
      </DisplayCard>
    </div>
  );
};
