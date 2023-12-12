import { Empty } from '@rickzhou/react-ui';
import { useRequest } from 'ahooks';

const { WithEmpty } = Empty;

export const App = () => {
  const { loading, data } = useRequest(async () => {
    return new Promise<string[]>(res => {
      setTimeout(() => {
        res(['React', 'Tailwind', 'Redux', 'React-Router']);
      }, 2000);
    });
  });

  return (
    <WithEmpty data={data} props={{ loading }}>
      <ul>
        {data?.map(i => {
          return <li key={i}>{i}</li>;
        })}
      </ul>
    </WithEmpty>
  );
};
