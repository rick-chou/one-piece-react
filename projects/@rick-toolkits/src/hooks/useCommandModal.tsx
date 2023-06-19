import { Context } from '@/store';
import { ActionType } from '@/types';
import { useCallback, useContext } from 'react';

export const useCommandModal = () => {
  const { state, dispatch } = useContext(Context);
  const toggleCommandModal = useCallback(() => {
    dispatch({
      type: ActionType.UPDATE_COMMAND_MODAL_OPEN,
      payload: { commandModalOpen: !state.commandModalOpen },
    });
  }, [dispatch, state.commandModalOpen]);

  return { toggleCommandModal, commandModalOpen: state.commandModalOpen };
};
