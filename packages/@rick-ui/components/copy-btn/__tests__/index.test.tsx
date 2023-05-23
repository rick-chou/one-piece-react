import { fireEvent, render, screen } from '@testing-library/react';
import CopyBtn from '../index';

describe('CopyBtn Component Copy', () => {
  beforeAll(() => {
    Object.defineProperty(global.navigator, 'clipboard', {
      value: {
        writeText: {},
      },
      configurable: true,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  render(<CopyBtn copyText="test" />);
  const button = screen.getByRole('button');

  it('success', async () => {
    jest.replaceProperty(
      global.navigator.clipboard,
      'writeText',
      async (v: string) => {
        return Promise.resolve();
      },
    );
    fireEvent.click(button);
  });

  it('error', async () => {
    jest.replaceProperty(
      global.navigator.clipboard,
      'writeText',
      async (v: string) => {
        return Promise.reject(new Error('copy error'));
      },
    );
    fireEvent.click(button);
  });
});
