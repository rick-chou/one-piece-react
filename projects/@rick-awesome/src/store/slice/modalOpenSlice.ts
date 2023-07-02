import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export enum OpenTypeConfig {
  FlowChartSelectOpen = 'flowchart-select-open',
}

const initialState: Record<OpenTypeConfig, boolean> = {
  [OpenTypeConfig.FlowChartSelectOpen]: false,
};

type PayloadType = {
  type: OpenTypeConfig;
  open: boolean;
};

export const modalOpenSlice = createSlice({
  name: 'modal-open',
  initialState,
  reducers: {
    onOpenChange(state, action: PayloadAction<PayloadType>) {
      state[action.payload.type] = action.payload.open;
    },
  },
});

export const { onOpenChange } = modalOpenSlice.actions;

export default modalOpenSlice.reducer;
