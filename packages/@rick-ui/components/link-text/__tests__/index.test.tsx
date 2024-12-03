import { render } from '@testing-library/react';
import LinkText from '../index';

describe('LinkText Component', () => {
  it('render', async () => {
    const url = 'https://github.com/rick-chou';
    const { container } = render(<LinkText text={url} />);
    const linkDom = container.querySelector('a');
    expect(linkDom?.hasAttribute('target')).toBeTruthy();
    expect(linkDom?.getAttribute('href')).toBe(url);
  });
});
