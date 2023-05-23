import { render } from '@testing-library/react';
import TimePicker from '../index';

describe('TimePicker Component', () => {
  const fn = jest.fn();

  it('render', async () => {
    render(
      <TimePicker
        startTime={Number(new Date())}
        endTime={Number(new Date())}
        onChange={fn}
      />,
    );
  });
});
