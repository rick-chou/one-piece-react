import SequenceChart from '@/components/sequence-chart';
import { message } from 'antd';
import { msc } from './msc';

const Sequence = () => {
  return (
    <div className="shadow-md dark:shadow-stone-100 rounded-lg overflow-hidden flex items-end justify-center bg-white py-4">
      <SequenceChart
        msc={msc}
        onClick={async (key: string) => {
          await message.info(key);
        }}
      />
    </div>
  );
};

export default Sequence;
