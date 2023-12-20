import { Show } from '@rickzhou/react-ui';

export const App = () => {
  return <Show when={true}>{() => <>NOW U SEE ME</>}</Show>;
};
