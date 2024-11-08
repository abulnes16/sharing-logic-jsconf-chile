import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './state';
import { RootState } from '../../store';

const initialState: AuthState = {
  isLoggedIn: false,
  email: '',
  isLoading: false,
  error: undefined,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<AuthState['isLoggedIn']>) => {
      state.isLoggedIn = action.payload;
    },
    setEmail: (state, action: PayloadAction<AuthState['email']>) => {
      state.email = action.payload;
    },
    setAuthLoading: (state, action: PayloadAction<AuthState['isLoading']>) => {
      state.isLoading = action.payload;
    },
    setAuthError: (state, action: PayloadAction<AuthState['error']>) => {
      state.error = action.payload;
    },
  },
});

export const AuthActions = authSlice.actions;

export const AuthSelectors = {
  getIsLoggedIn: (state: RootState) => state.authentication.isLoggedIn,
  getEmail: (state: RootState) => state.authentication.email,
  getAuthLoading: (state: RootState) => state.authentication.isLoading,
  getAuthError: (state: RootState) => state.authentication.error,
};

export default authSlice.reducer;
