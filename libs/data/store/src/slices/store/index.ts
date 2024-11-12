import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@e-commerce-sharling-logic/models';
import { StoreState } from './state';
import { RootState } from '../../store';

const initialState: StoreState = {
  cart: [],
  isLoading: false,
  error: undefined,
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });
    },
    setStoreLoader: (state, action: PayloadAction<StoreState['isLoading']>) => {
      state.isLoading = action.payload;
    },
    setStoreError: (state, action: PayloadAction<StoreState['error']>) => {
      state.error = action.payload;
    },
  },
});

export const StoreActions = storeSlice.actions;

export const StoreSelectors = {
  getCart: (state: RootState) => state.store.cart,
  getStoreLoading: (state: RootState) => state.store.isLoading,
  getStoreError: (state: RootState) => state.store.error,
};

export default storeSlice.reducer;
