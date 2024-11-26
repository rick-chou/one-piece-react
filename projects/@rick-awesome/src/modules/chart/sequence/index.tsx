import SequenceChart from '@/blog/components/sequence-chart';
import { message } from 'antd';
import { msc } from './msc';

const Sequence = () => {
  return (
    <div className="w-100 shadow-md dark:shadow-stone-100 rounded-lg overflow-hidden flex items-end justify-center bg-white py-2">
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
