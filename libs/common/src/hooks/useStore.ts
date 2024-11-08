import {
  StoreSelectors,
  useAppSelector,
} from '@sharing-logic-jsconf-chile/store';

const useStore = () => {
  const cart = useAppSelector(StoreSelectors.getCart);
  const isLoading = useAppSelector(StoreSelectors.getStoreLoading);
  const error = useAppSelector(StoreSelectors.getStoreError);

  return {
    cart,
    isLoading,
    error,
  };
};

export default useStore;
