import { Product } from '@e-commerce-sharling-logic/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginationParams, ProductApiResponse } from '../models';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductApiResponse, PaginationParams>({
      query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
      merge: (currentProducts, newProducts) => {
        console.log('Current Products', currentProducts.products);
        console.log('New Products', newProducts.products);
        currentProducts.products.push(...newProducts.products);
      },
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    searchProduct: builder.query<Product[], string>({
      query: (query) => `/products/search?q=${query}`,
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useLazySearchProductQuery,
} = productsApi;
