import React from 'react';
import { GlobalStateProvider } from '@e-commerce-sharling-logic/ui';
import { LoginScreen } from './screens';

export const App = () => {
  return (
    <GlobalStateProvider>
      <LoginScreen />
    </GlobalStateProvider>
  );
};

export default App;
