import type { AppDispatch, RootState } from '@//store';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

export const useRickDispatch: () => AppDispatch = useDispatch;
export const useRickSelector: TypedUseSelectorHook<RootState> = useSelector;
