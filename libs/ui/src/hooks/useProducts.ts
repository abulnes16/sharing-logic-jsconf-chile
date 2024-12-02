import { useLazyGetProductsQuery } from '@e-commerce-sharling-logic/store';
import { useCallback, useEffect, useState } from 'react';
import { PAGE_SIZE } from '../constants/pagination';

const useProducts = () => {
  const [getProducts, { data, isLoading, error }] = useLazyGetProductsQuery();
  const [skip, setSkip] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
      await getProducts({ limit: PAGE_SIZE, skip });
      setSkip((previousLimit) => previousLimit + PAGE_SIZE);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }, [skip, getProducts]);

  const clearFetchProduct = async () => {
    try {
      await getProducts({ limit: 100, skip: 0 });
      setSkip(PAGE_SIZE);
      return true;
    } catch (e) {
      return false;
    }
  };

  const fetchMore = async () => {
    if (isLoading) return;
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products: data?.products,
    isLoading,
    error,
    skip,
    fetchProducts,
    clearFetchProduct,
    fetchMore,
  };
};

export default useProducts;
