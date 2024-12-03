import DisplayCard from '@rickzhou/react-ui/docs/card';
import Cpn from '..';

export const Demo = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <DisplayCard>
        <Cpn text="https://github.com/rick-chou" />
      </DisplayCard>

      <DisplayCard>
        <Cpn
          text={`
           Welcome to my home
           https://github.com/rick-chou
        `}
        />
      </DisplayCard>

      <DisplayCard>
        <Cpn
          text={`
           Welcome to my home
           https://github.com/rick-chou
           Welcome to my home
           https://github.com/rick-chou
        `}
        />
      </DisplayCard>
    </div>
  );
};
