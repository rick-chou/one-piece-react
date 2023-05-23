import DisplayCard from '@/docs/card';
import Cpn from '..';

const style = { height: '30vh' };

export const Demo = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <DisplayCard title="Default">
        <Cpn style={style} />
      </DisplayCard>
      <DisplayCard title="Fill">
        <Cpn fill="yellow" style={style} />
      </DisplayCard>
      <DisplayCard title="Item">
        <Cpn item={{ width: 2, height: 20 }} style={style} />
      </DisplayCard>
      <DisplayCard title="Count">
        <Cpn count={10} style={style} />
      </DisplayCard>
      <DisplayCard title="Duration">
        <Cpn duration={5000} style={style} />
      </DisplayCard>
      <DisplayCard title="Delay">
        <Cpn duration={500} style={style} />
      </DisplayCard>
    </div>
  );
};
