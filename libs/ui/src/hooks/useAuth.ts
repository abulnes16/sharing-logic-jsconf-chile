import {
  AuthSelectors,
  useAppSelector,
} from '@e-commerce-sharling-logic/store';

const useAuth = () => {
  const isLoggedIn = useAppSelector(AuthSelectors.getIsLoggedIn);
  const email = useAppSelector(AuthSelectors.getEmail);
  const isLoading = useAppSelector(AuthSelectors.getIsLoggedIn);
  const error = useAppSelector(AuthSelectors.getAuthError);

  return {
    isLoading,
    isLoggedIn,
    email,
    error,
  };
};

export default useAuth;
