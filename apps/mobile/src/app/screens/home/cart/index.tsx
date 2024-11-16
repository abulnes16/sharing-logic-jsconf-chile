import React from 'react';
import { View, Text } from 'react-native';
import { Header, Screen } from '@mobile/components';
import { Localization } from '@e-commerce-sharling-logic/ui';

const CartScreen = () => {
  return (
    <Screen>
      <Header title={Localization.home.myCart} />
    </Screen>
  );
};

export default CartScreen;
