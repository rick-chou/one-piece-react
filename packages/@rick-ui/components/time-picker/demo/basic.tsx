import { TimePicker } from '@rickzhou/react-ui';
import dayjs from 'dayjs';

export const App = () => {
  return (
    <TimePicker
      currentTime={[dayjs('2018-02-09').valueOf(), dayjs().valueOf()]}
      onChange={console.log}
    />
  );
};
