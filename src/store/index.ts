import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import viewModeReducer from './viewModeSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    viewMode: viewModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
