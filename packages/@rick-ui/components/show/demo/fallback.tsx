import { Show } from '@rickzhou/react-ui';

export const App = () => {
  return (
    <Show when={false} fallback={<div>THIS IS FALLBACK UI</div>}>
      NOW U SEE ME
    </Show>
  );
};
