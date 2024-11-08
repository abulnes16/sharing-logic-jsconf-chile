import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer, StoreReducer } from './slices';

export const store = configureStore({
  reducer: {
    authentication: AuthReducer,
    store: StoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
