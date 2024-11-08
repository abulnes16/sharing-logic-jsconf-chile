import { Product, UILoadingState } from '@sharing-logic-jsconf-chile/models';

export interface StoreState extends UILoadingState {
  cart: Product[];
}
