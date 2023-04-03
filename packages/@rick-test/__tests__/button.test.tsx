import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from './button';

describe('Button Component', () => {
	it('render', async () => {
		const onClick = jest.fn();
		render(<Button text="btn" onClick={onClick} />);
		expect(await screen.findByText('btn')).toBeInTheDocument();
		fireEvent.click(screen.getByText('btn'));
		expect(onClick).toHaveBeenCalledTimes(3);
	});
});
