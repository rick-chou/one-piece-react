import { Show } from '@rickzhou/react-ui';

export const App = () => {
  return (
    <Show
      when={true}
      fallback={() => {
        console.log('fallback');
        return <div>THIS IS FALLBACK UI</div>;
      }}>
      {() => {
        console.log('show');
        return <>NOW U SEE ME</>;
      }}
    </Show>
  );
};
