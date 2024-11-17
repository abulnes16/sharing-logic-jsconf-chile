import { useGetProductByIdQuery } from '@e-commerce-sharling-logic/store';

const useProductDetail = (id: number) => {
  const { data, isLoading, error } = useGetProductByIdQuery(id);

  return {
    product: data,
    isLoading,
    error,
  };
};

export default useProductDetail;
