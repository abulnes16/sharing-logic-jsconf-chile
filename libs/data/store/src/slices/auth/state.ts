import { UILoadingState } from '@sharing-logic-jsconf-chile/models';

export interface AuthState extends UILoadingState {
  isLoggedIn: boolean;
  email: string;
}
