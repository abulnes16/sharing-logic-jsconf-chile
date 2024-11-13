import React from 'react';
import { GlobalStateProvider } from '@e-commerce-sharling-logic/ui';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './navigation/MainNavigator';

export const App = () => {
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </GlobalStateProvider>
  );
};

export default App;
