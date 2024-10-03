import SequenceChart from '@/blog/components/sequence-chart';
import { message } from 'antd';
import { msc } from './msc';
import { ContentWrapper } from '@/theme';

const Sequence = () => {
  return (
    <ContentWrapper>
      <div className="w-100 shadow-md dark:shadow-stone-100 rounded-lg overflow-hidden flex items-end justify-center bg-white py-4">
        <SequenceChart
          msc={msc}
          onClick={async (key: string) => {
            await message.info(key);
          }}
        />
      </div>
    </ContentWrapper>
  );
};

export default Sequence;
