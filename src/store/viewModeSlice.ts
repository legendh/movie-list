import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewModeState {
  isGridMode: boolean;
}

const initialState: ViewModeState = {
  isGridMode: true,
};

const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState,
  reducers: {
    toggleViewMode(state) {
      state.isGridMode = !state.isGridMode;
    },
    setViewMode(state, action: PayloadAction<boolean>) {
      state.isGridMode = action.payload;
    },
  },
});

export const { toggleViewMode, setViewMode } = viewModeSlice.actions;

export default viewModeSlice.reducer;
