import InternalEmpty from './Empty';
import { WithEmpty } from './WithEmpty';

export type { EmptyProps } from './Empty';

type InternalEmptyType = typeof InternalEmpty;

type CompoundedComponent = InternalEmptyType & {
  WithEmpty: typeof WithEmpty;
};

const Empty = InternalEmpty as CompoundedComponent;

Empty.WithEmpty = WithEmpty;
export default Empty;
