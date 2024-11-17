import { Product } from '@e-commerce-sharling-logic/models';
import {
  StoreActions,
  StoreSelectors,
  useAppDispatch,
  useAppSelector,
} from '@e-commerce-sharling-logic/store';
import { useState } from 'react';

const useStore = () => {
  const { addProduct, removeProduct, removeQuantityInCart, addQuantityInCart } =
    StoreActions;
  const cart = useAppSelector(StoreSelectors.getCart);
  const isLoading = useAppSelector(StoreSelectors.getStoreLoading);
  const error = useAppSelector(StoreSelectors.getStoreError);
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(1);
  const [validationError, setValidationError] = useState('');

  const addQuantity = (currentStock: number) => {
    if (quantity + 1 > currentStock) {
      setValidationError("Quantity can't exceed stock");
      return;
    }
    setQuantity((quantity) => quantity + 1);
  };
  const removeQuantity = () => {
    if (quantity - 1 < 0) {
      setValidationError("Quantity can't be less than 0");
      return;
    }
    setQuantity((quantity) => quantity - 1);
  };

  const onAddToCart = (product: Product) => {
    const { title, id, thumbnail } = product;
    dispatch(addProduct({ name: title, id, image: thumbnail, quantity }));
  };

  const onRemoveFromCart = (id: number) => {
    dispatch(removeProduct(id));
  };

  const onAddQuantityInCart = (productId: number) =>
    dispatch(addQuantityInCart(productId));

  const onRemoveQuantityInCart = (productId: number) =>
    dispatch(removeQuantityInCart(productId));

  return {
    cart,
    isLoading,
    error,
    quantity,
    onAddToCart,
    onRemoveFromCart,
    addQuantity,
    removeQuantity,
    onAddQuantityInCart,
    onRemoveQuantityInCart,
    validationError,
  };
};

export default useStore;
