import Card from '@/docs/card';
import Cpn from '..';

export const Demo = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="col-span-2">
        <Card title="Loading">
          <Cpn loading height="80vh" />
        </Card>
      </div>

      <Card title="Default">
        <Cpn />
      </Card>
      <Card title="Loading">
        <Cpn loading />
      </Card>
      <Card title="Desc">
        <Cpn desc="Empty" />
      </Card>
      <Card title="WithEmpty">
        <Cpn.WithEmpty
          data={false}
          emptyProps={{ height: '30vh', desc: 'WithEmpty Wrapper Component' }}>
          Something
        </Cpn.WithEmpty>
      </Card>
    </div>
  );
};
