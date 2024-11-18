import React from 'react';
import AuthNavigator from './auth/AuthNavigator';
import { useAuth } from '@e-commerce-sharling-logic/ui';
import HomeNavigator from './home/HomeNavigator';

function MainNavigator() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <HomeNavigator />;
}

export default MainNavigator;
