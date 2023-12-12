import { isEmptyValue } from '../../../@rick-utils/common';
import Show from '../show';
import Empty, { type EmptyProps } from './Empty';

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
