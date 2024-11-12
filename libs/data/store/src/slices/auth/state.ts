import { UILoadingState } from '@e-commerce-sharling-logic/models';

export interface AuthState extends UILoadingState {
  isLoggedIn: boolean;
  email: string;
}
