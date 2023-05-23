import DisplayCard from '@/docs/card';
import Cpn from '..';

export const Demo = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <DisplayCard>
        <Cpn copyText="rick" />
      </DisplayCard>

      <DisplayCard>
        <Cpn copyText="rick" showText />
      </DisplayCard>
    </div>
  );
};
