import React from 'react';
import { Image } from 'react-native';
import { IMAGES, useAuth } from '@e-commerce-sharling-logic/ui';
import Screen from '../../../components/templates/Screen';
import { styles } from './styles';

const Login = () => {
  const auth = useAuth();

  return (
    <Screen contentStyle={styles.screen}>
      <Image source={{ uri: IMAGES.LOGO }} style={styles.logo} />
    </Screen>
  );
};

export default Login;
