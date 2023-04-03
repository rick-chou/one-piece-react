import { act, renderHook } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('Counter', () => {
	const { result } = renderHook(() => useCounter());

	act(() => {
		result.current.increment();
	});

	expect(result.current.count).toBe(1);
});
