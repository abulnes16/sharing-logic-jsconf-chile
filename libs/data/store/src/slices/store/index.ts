import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '@e-commerce-sharling-logic/models';
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
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action: PayloadAction<CartProduct>) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
    },

    addQuantityInCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    },

    removeQuantityInCart: (state, action: PayloadAction<number>) => {
      const currentProduct = state.cart.find(
        (product) => product.id === action.payload
      );
      if (!currentProduct) return;

      const newQuantity = currentProduct.quantity - 1;

      if (newQuantity === 0 || newQuantity < 0) {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload
        );
      } else {
        state.cart = state.cart.map((product) => {
          if (product.id === action.payload) {
            return { ...product, quantity: newQuantity };
          }

          return product;
        });
      }
    },
    setStoreLoader: (state, action: PayloadAction<StoreState['isLoading']>) => {
      state.isLoading = action.payload;
    },
    setStoreError: (state, action: PayloadAction<StoreState['error']>) => {
      state.error = action.payload;
    },
    clear: () => initialState,
  },
});

export const StoreActions = storeSlice.actions;

export const StoreSelectors = {
  getCart: (state: RootState) => state.store.cart,
  getStoreLoading: (state: RootState) => state.store.isLoading,
  getStoreError: (state: RootState) => state.store.error,
};

export default storeSlice.reducer;
