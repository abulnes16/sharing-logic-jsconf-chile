import { View, Text } from 'react-native';
import React from 'react';
import { Header, Screen } from '@mobile/components';
import { Localization } from '@e-commerce-sharling-logic/ui';

const HomeScreen = () => {
  return (
    <Screen>
      <Header title={Localization.home.ourProducts} />
    </Screen>
  );
};

export default HomeScreen;
