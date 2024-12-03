import { Context } from '@rickzhou/react-editor/store';
import { ActionType } from '@rickzhou/react-editor/types';
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
