import { act, cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Upload, { type UploadRef } from '../index';

describe('LinkText Component', () => {
  afterEach(cleanup);

  it('visible props', async () => {
    render(<Upload visible={false} />);
    render(<Upload visible={true} />);
  });

  it('chunk props', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <Upload type={'file'} chunk={{ use: true }} onChange={onChange} />,
    );
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input: HTMLInputElement = container.querySelector(
      'input[directory=""]',
    )!;
    await userEvent.upload(input as HTMLElement, file);
    expect(onChange).toBeCalledTimes(1);
    expect(input.files![0]).toBe(file);
    expect(input.files!.item(0)).toBe(file);
    expect(input.files).toHaveLength(1);
  });

  it('ref', async () => {
    const ref = React.createRef<UploadRef>();
    const { rerender } = render(<Upload ref={ref} />);
    const upload = jest.spyOn(ref.current!, 'upload');
    act(() => {
      ref.current!.upload();
    });
    expect(upload).toBeCalled();

    rerender(<Upload ref={ref} type="dir" />);
    act(() => {
      ref.current!.upload();
    });
    expect(upload).toBeCalled();
  });
});
