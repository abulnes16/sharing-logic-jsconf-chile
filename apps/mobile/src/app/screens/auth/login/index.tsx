import React from 'react';
import { Image } from 'react-native';
import { IMAGES, Localization, useAuth } from '@e-commerce-sharling-logic/ui';
import { Button, Heading, Spacer, Screen, Loader } from '@mobile/components';
import { styles } from './styles';

const Login = () => {
  const { login, isLoading } = useAuth();

  return (
    <Screen contentStyle={styles.screen}>
      <Image source={{ uri: IMAGES.LOGO }} style={styles.logo} />
      <Spacer type="md" />
      <Heading>{Localization.auth.jsConfSharingLogic}</Heading>
      <Spacer type="md" />
      {isLoading ? (
        <Loader />
      ) : (
        <Button title={Localization.auth.login} onPress={login} />
      )}
    </Screen>
  );
};

export default Login;
