import { render } from '@testing-library/react';
import Empty from '../index';

const { WithEmpty } = Empty;

describe('Empty Component', () => {
  it('loading props', async () => {
    render(<Empty loading={true} />);
    render(<Empty loading={false} />);
  });
});

describe('WithEmpty Component', () => {
  it('data props', async () => {
    render(<WithEmpty data={[]}>child</WithEmpty>);
    render(<WithEmpty data={false}>child</WithEmpty>);
    render(<WithEmpty data={undefined}>child</WithEmpty>);
    render(<WithEmpty data={'string'}>child</WithEmpty>);
  });

  it('showEmpty props', async () => {
    render(
      <WithEmpty data={[]} showEmpty={true}>
        child
      </WithEmpty>,
    );
    render(
      <WithEmpty data={[]} showEmpty={false}>
        child
      </WithEmpty>,
    );
  });

  it('emptyProps props', async () => {
    render(
      <WithEmpty
        data={[]}
        props={{ desc: 'empty', height: '50vh', loading: true }}>
        child
      </WithEmpty>,
    );
  });
});

describe('WithEmpty Component Children', () => {
  it('emptyProps props', async () => {
    const child = <div>child</div>;
    const { container } = render(<WithEmpty data={true}>{child}</WithEmpty>);
    expect(container.innerHTML).toMatch('<div>child</div>');
  });
});
