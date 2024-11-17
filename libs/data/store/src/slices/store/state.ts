import { CartProduct, UILoadingState } from '@e-commerce-sharling-logic/models';

export interface StoreState extends UILoadingState {
  cart: CartProduct[];
}
