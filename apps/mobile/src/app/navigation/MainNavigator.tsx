import { useAuth } from '@e-commerce-sharling-logic/ui';
import { AuthNavigator } from './auth/AuthNavigator';
import { HomeNavigator } from './home/HomeNavigator';

export const MainNavigator = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <HomeNavigator />;
};
