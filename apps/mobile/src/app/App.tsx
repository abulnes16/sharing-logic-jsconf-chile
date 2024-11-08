import React from 'react';

import { GlobalStateProvider } from '@sharing-logic-jsconf-chile/shared-ui';
import { LoginScreen } from './screens/auth';

export const App = () => {

  return (
    <GlobalStateProvider>
      <LoginScreen/>
    </GlobalStateProvider>
  );
};

export default App;
