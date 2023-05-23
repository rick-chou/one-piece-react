import DisplayCard from '@/docs/card';
import Cpn from '..';

const style = { height: '30vh' };

export const Demo = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <DisplayCard title="Default">
        <Cpn text="Rick Zhou" style={style} />
      </DisplayCard>
      <DisplayCard title="Loop">
        <Cpn
          style={style}
          text="React UI"
          stroke="blue"
          fill="yellow"
          fontSize={120}
          loop={false}
        />
      </DisplayCard>
      <DisplayCard title="Duration">
        <Cpn
          style={style}
          text="0209"
          stroke="red"
          fill="pink"
          fontSize={120}
          duration={5000}
        />
      </DisplayCard>
    </div>
  );
};
