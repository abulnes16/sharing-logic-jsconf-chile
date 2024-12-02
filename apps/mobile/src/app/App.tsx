import React from 'react';
import { GlobalStateProvider } from '@e-commerce-sharling-logic/ui';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { MainNavigator } from './navigation/MainNavigator';

export const App = () => {
  return (
    <>
      <GlobalStateProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </GlobalStateProvider>
      <Toast />
    </>
  );
};

export default App;
