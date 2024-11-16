import { Product } from '@e-commerce-sharling-logic/models';

export interface PaginationParams {
  limit: number;
  skip: number;
}

export interface ProductApiResponse extends PaginationParams {
  products: Product[];
  total: number;
}
