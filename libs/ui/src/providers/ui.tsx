import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@e-commerce-sharling-logic/store';

const GlobalStateProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default GlobalStateProvider;
