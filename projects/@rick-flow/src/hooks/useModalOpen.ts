import type { OpenTypeConfig } from '@rickzhou/react-flow/store/slice/modalOpenSlice';
import { onOpenChange } from '@rickzhou/react-flow/store/slice/modalOpenSlice';
import { useCallback } from 'react';
import { useRickDispatch, useRickSelector } from './useStore';

export const useModalOpen = (openType: OpenTypeConfig) => {
  const dispatch = useRickDispatch();
  const open = useRickSelector(state => state.modalOpen[openType]);
  const onShow = useCallback(() => {
    dispatch(onOpenChange({ type: openType, open: true }));
  }, [dispatch, openType]);
  const onHidden = useCallback(() => {
    dispatch(onOpenChange({ type: openType, open: false }));
  }, [dispatch, openType]);

  return {
    open,
    onShow,
    onHidden,
  };
};
