import { isEmpty } from 'lodash-es';
import Show from '../show';
import Empty, { type EmptyProps } from './Empty';

const isEmptyValue = (value: any) => {
  if (typeof value === 'string') return !value.trim();
  if (typeof value === 'boolean') return !value;
  if (typeof value === 'object') return isEmpty(value);
  return true;
};

type WithEmptyProps = {
  data: any;
  props?: EmptyProps;
  showEmpty?: boolean;
  children: React.ReactNode;
};

export const WithEmpty: React.FC<WithEmptyProps> = ({
  data,
  children,
  showEmpty = true,
  props = {},
}) => {
  return (
    <Show
      when={!isEmptyValue(data)}
      fallback={
        <Show when={showEmpty}>
          <Empty height="40vh" {...props} />
        </Show>
      }>
      {children}
    </Show>
  );
};
