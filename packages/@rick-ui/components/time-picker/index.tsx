import { RedoOutlined } from '@ant-design/icons';
import { css, Global } from '@emotion/react';
import { timestampToDateString } from '@rickzhou/react-utils/date';
import { Button, DatePicker, Tag } from 'antd';
import { type RangePickerProps } from 'antd/es/date-picker';
import dayjs, { type Dayjs } from 'dayjs';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  CursorPointer,
  FlexCenter,
  FontItalic,
  PaddingY,
  WidthFull,
} from '../style.base';

export type TimePickerProps = {
  /** start time */
  startTime: number;
  /** end time */
  endTime: number;
  /** reset start time */
  defaultStartTime?: number;
  /** reset end time */
  defaultEndTime?: number;
  /** is show reset footer */
  showReset?: boolean;
  onChange?: (
    date: [startTime: number, endTime: number],
    dateStr: [startTime: string, endTime: string],
  ) => void;
};

const TimePicker: React.FC<TimePickerProps> = ({
  startTime,
  endTime,
  defaultStartTime = startTime,
  defaultEndTime = endTime,
  showReset = true,
  onChange,
}) => {
  const [date, setDate] = useState<[Dayjs, Dayjs]>();
  const [tempDate, setTempDate] = useState<[Dayjs, Dayjs]>();
  const resetBtnRef = useRef<HTMLDivElement>(null);

  const isValidTime = useMemo(() => {
    return Number.isFinite(startTime) && Number.isFinite(endTime);
  }, [startTime, endTime]);

  const disabledDate: RangePickerProps['disabledDate'] = date => {
    const _date = date.valueOf();
    return _date > defaultEndTime || _date < defaultStartTime;
  };

  useEffect(() => {
    if (isValidTime) {
      setDate([dayjs(startTime), dayjs(endTime)]);
      setTempDate([dayjs(startTime), dayjs(endTime)]);
    }
  }, [startTime, endTime, isValidTime]);

  const onDateChange = (value: RangePickerProps['value']) => {
    setTempDate(value as [Dayjs, Dayjs]);
  };

  const renderFooter = (startTime: number, endTime: number) => {
    return (
      <div
        css={css`
          ${FlexCenter}
          ${WidthFull}
          ${PaddingY(3)}
        `}>
        <Tag
          onClick={() => {
            resetBtnRef.current?.click();
          }}
          css={CursorPointer}
          color="gold">
          <span css={FontItalic}>
            {timestampToDateString(startTime)} ~{' '}
            {timestampToDateString(endTime)}
            <Button type="link" icon={<RedoOutlined />} />
          </span>
        </Tag>
      </div>
    );
  };

  if (!isValidTime) return null;

  return (
    <div>
      <Global
        styles={css`
          .rick-timer-picker {
            .ant-picker-presets {
              display: none !important;
            }
          }
        `}
      />
      <DatePicker.RangePicker
        popupClassName="rick-timer-picker"
        showTime
        onOpenChange={open => {
          if (!open && date && tempDate) {
            if (!date[0].isSame(tempDate[0]) || !date[1].isSame(tempDate[1])) {
              setDate(tempDate);
              onChange?.(
                [tempDate[0].valueOf(), tempDate[1].valueOf()],
                [
                  tempDate[0].format('YYYY-MM-DD HH:mm:ss'),
                  tempDate[1].format('YYYY-MM-DD HH:mm:ss'),
                ],
              );
            }
          }
        }}
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
        renderExtraFooter={() =>
          showReset ? renderFooter(defaultStartTime, defaultEndTime) : null
        }
      />
    </div>
  );
};

export default TimePicker;
