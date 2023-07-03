import { type ThemeMode } from '@/type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = 'dark';

type PayloadType = ThemeMode;

export const themeSlice = createSlice({
  name: 'theme-mode',
  initialState,
  reducers: {
    onThemeChange(_, action: PayloadAction<PayloadType>) {
      return action.payload;
    },
  },
});

export const { onThemeChange } = themeSlice.actions;

export default themeSlice.reducer;
