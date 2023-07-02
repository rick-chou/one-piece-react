import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { type FlowChartType } from '@rick-flow/interface';
import { produce } from 'immer';

const initialState: Record<string, FlowChartType> = {};

export type AddPayloadType = {
  type: 'add';
  data: FlowChartType;
};

export type DeletePayloadType = {
  type: 'delete';
  id: string;
};

export type UpdatePayloadType = {
  type: 'update';
  data: FlowChartType;
  id: string;
};

type PayloadType = AddPayloadType | UpdatePayloadType | DeletePayloadType;

export const pageSlice = createSlice({
  name: 'update-flow',
  initialState,
  reducers: {
    update(state, action: PayloadAction<PayloadType>) {
      switch (action.payload.type) {
        case 'add':
          return {
            ...state,
            [action.payload.data.id]: action.payload.data,
          };
        case 'update':
          return {
            ...state,
            [action.payload.id]: action.payload.data,
          };
        case 'delete':
          return produce(state, draft => {
            delete draft[(action.payload as DeletePayloadType).id];
          });

        default:
          return state;
      }
    },
  },
});

export const { update } = pageSlice.actions;

export default pageSlice.reducer;
