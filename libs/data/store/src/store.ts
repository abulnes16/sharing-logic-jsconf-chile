import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer, StoreReducer } from './slices';
import { useDispatch, useSelector } from 'react-redux';
import { productsApi } from './api/products';

export const store = configureStore({
  reducer: {
    authentication: AuthReducer,
    store: StoreReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
