export type ThemeMode = 'light' | 'dark';

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ModelType = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export const useTheme = create<ModelType>()(
  immer(set => ({
    theme: 'light',
    toggleTheme() {
      set(state => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
      });
    },
  })),
);
