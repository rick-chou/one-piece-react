import { TimePicker } from '@rickzhou/react-ui';
import { message } from 'antd';
import dayjs from 'dayjs';

export const App = () => {
  return (
    <TimePicker
      currentTime={[dayjs('2018-02-09').valueOf(), dayjs().valueOf()]}
      onChange={async (startTime, endTime) => {
        await message.info(
          `time change  startTime-${startTime} endTime-${endTime}`,
        );
      }}
    />
  );
};
