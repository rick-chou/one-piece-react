import { RedoOutlined } from '@ant-design/icons';
import { Button, DatePicker, Tag } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { first, last } from 'lodash-es';
import { useEffect, useMemo, useRef, useState } from 'react';
import { timestampToDateString } from '../_util/date';
import Show from '../show';

const { RangePicker } = DatePicker;

export type TimePickerProps = {
  currentTime: [number, number];
  defaultTime?: [number, number];
  onChange: (
    isReset: boolean,
    timestamp: number[],
    formatString: string[],
    date: [Dayjs, Dayjs],
  ) => void;
  refreshToken?: any;
  name?: string;
  showMs?: boolean;
};

const TimePicker: React.FC<TimePickerProps> = ({
  currentTime,
  onChange,
  defaultTime = currentTime,
  refreshToken,
  name = 'Time',
  showMs = false,
}) => {
  const [startTime, endTime] = currentTime;
  const [defaultStartTime, defaultEndTime] = defaultTime;

  const [date, setDate] = useState<[Dayjs, Dayjs]>();
  const defaultDate = useRef<[Dayjs, Dayjs]>();
  const resetBtnRef = useRef<HTMLDivElement>(null);
  const isReset = useRef(false);

  const isValidTime = useMemo(() => {
    return Number.isFinite(startTime) && Number.isFinite(endTime);
  }, [startTime, endTime]);

  const disabledDate: RangePickerProps['disabledDate'] = date => {
    const _date = date.valueOf();
    return _date > defaultEndTime || _date < defaultStartTime;
  };

  const genFormatString = (formatString: string[]) => {
    if (showMs) {
      return [`${first(formatString)}:000`, `${last(formatString)}:999`];
    }

    return formatString;
  };

  useEffect(() => {
    if (isValidTime) {
      defaultDate.current = [dayjs(startTime), dayjs(endTime)];
      setDate(defaultDate.current);
    }
  }, [startTime, endTime, refreshToken, isValidTime]);

  const renderFooter = (startTime: number, endTime: number) => {
    return (
      <div className="w-full flex justify-center py-3">
        <Tag
          onClick={() => {
            isReset.current = true;
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
        onOpenChange={open => {
          isReset.current = !open;
        }}
        popupClassName="time-picker"
        showTime
        onChange={(date, formatString) => {
          setDate(date as [Dayjs, Dayjs]);
          onChange(
            isReset.current,
            [dayjs(first(date)).valueOf(), dayjs(last(date)).valueOf()],
            genFormatString(formatString),
            date as [Dayjs, Dayjs],
          );
        }}
        format="MM/DD/YYYY HH:mm:ss"
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
