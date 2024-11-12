import { Product, UILoadingState } from '@e-commerce-sharling-logic/models';

export interface StoreState extends UILoadingState {
  cart: Product[];
}
