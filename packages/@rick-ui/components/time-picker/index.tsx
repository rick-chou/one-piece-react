import { RedoOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Tag } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { first, last } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { timestampToDateString } from '../_util/date';
import Show from '../show';

const { RangePicker } = DatePicker;

export type TimePickerProps = {
  currentTime: [number, number];
  defaultTime?: [number, number];
  onChange: (startTime: number, endTime: number) => void;
  refreshToken?: any;
  name?: string;
};

const TimePicker: React.FC<TimePickerProps> = ({
  currentTime,
  onChange,
  defaultTime = currentTime,
  refreshToken,
  name = 'Time',
}) => {
  const [date, setDate] = useState<[Dayjs, Dayjs]>();
  const defaultDate = useRef<[Dayjs, Dayjs]>();
  const resetBtnRef = useRef<HTMLDivElement>(null);

  const [startTime, endTime] = currentTime;
  const [defaultStartTime, defaultEndTime] = defaultTime;

  const isValidTime = useMemo(() => {
    return Number.isFinite(startTime) && Number.isFinite(endTime);
  }, [startTime, endTime]);

  const disabledDate: RangePickerProps['disabledDate'] = date => {
    const _date = date.valueOf();
    return _date > defaultEndTime || _date < defaultStartTime;
  };

  useEffect(() => {
    if (isValidTime) {
      defaultDate.current = [dayjs(startTime), dayjs(endTime)];
      setDate(defaultDate.current);
    }
  }, [startTime, endTime, refreshToken, isValidTime]);

  const onDateChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
  ) => {
    setDate(value as [Dayjs, Dayjs]);
  };

  const renderFooter = (startTime: number, endTime: number) => {
    return (
      <div className="w-full flex justify-center py-3">
        <Tag
          onClick={() => {
            resetBtnRef.current?.click();
          }}
          className="cursor-pointer"
          color="gold">
          <span className="italic">
            <span>{name} : </span>
            {timestampToDateString(startTime, 'MM/DD/YYYY HH:mm:ss')} ~
            {timestampToDateString(endTime, 'MM/DD/YYYY HH:mm:ss')}
            <Button type="link" icon={<RedoOutlined />} />
          </span>
        </Tag>
      </div>
    );
  };

  return (
    <Show when={isValidTime}>
      <RangePicker
        popupClassName="time-picker"
        showTime
        onChange={date => {
          onChange(dayjs(first(date)).valueOf(), dayjs(last(date)).valueOf());
        }}
        format="MM/DD/YYYY HH:mm:ss"
        onCalendarChange={onDateChange}
        disabledDate={disabledDate}
        showNow={false}
        presets={[
          {
            label: <div ref={resetBtnRef}>reset time</div>,
            value: [dayjs(defaultStartTime), dayjs(defaultEndTime)],
          },
        ]}
        allowClear={false}
        value={date}
        renderExtraFooter={() => renderFooter(defaultStartTime, defaultEndTime)}
      />
    </Show>
  );
};

export default TimePicker;
