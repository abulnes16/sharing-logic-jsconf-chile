import { useLazyGetProductsQuery } from '@e-commerce-sharling-logic/store';
import { useCallback, useEffect, useState } from 'react';
import { PAGE_SIZE } from '../constants/pagination';

const useProducts = () => {
  const [getProducts, { data, isLoading, error }] = useLazyGetProductsQuery();
  const [limit, setLimit] = useState(PAGE_SIZE);

  const fetchProducts = useCallback(async () => {
    try {
      await getProducts({ limit, skip: limit });
      setLimit((previousLimit) => previousLimit + PAGE_SIZE);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }, [limit, getProducts]);

  const clearFetchProduct = async () => {
    try {
      await getProducts({ limit: 30, skip: 0 });
      setLimit(PAGE_SIZE);
      return true;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products: data?.products,
    isLoading,
    error,
    limit,
    fetchProducts,
    clearFetchProduct,
  };
};

export default useProducts;
