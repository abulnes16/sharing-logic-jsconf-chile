import {
  AuthActions,
  AuthSelectors,
  useAppDispatch,
  useAppSelector,
} from '@e-commerce-sharling-logic/store';

const useAuth = () => {
  const { setIsLoggedIn, setAuthLoading } = AuthActions;
  const isLoggedIn = useAppSelector(AuthSelectors.getIsLoggedIn);
  const email = useAppSelector(AuthSelectors.getEmail);
  const isLoading = useAppSelector(AuthSelectors.getAuthLoading);
  const error = useAppSelector(AuthSelectors.getAuthError);
  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(setAuthLoading(true));
    setTimeout(() => {
      dispatch(setIsLoggedIn(true));
      dispatch(setAuthLoading(false));
    }, 2000);
  };

  const logout = (afterLogout?: () => void) => {
    dispatch(setAuthLoading(true));
    setTimeout(() => {
      dispatch(setIsLoggedIn(false));
      dispatch(setAuthLoading(false));
      afterLogout && afterLogout();
    }, 1000);
  };
  return {
    isLoading,
    isLoggedIn,
    email,
    error,
    login,
    logout,
  };
};

export default useAuth;
