import React from 'react';
import { Image } from 'react-native';
import { IMAGES, Localization } from '@e-commerce-sharling-logic/ui';
import { Button, Heading, Spacer, Screen } from '@mobile/components';
import { styles } from './styles';

const Login = () => {
  return (
    <Screen contentStyle={styles.screen}>
      <Image source={{ uri: IMAGES.LOGO }} style={styles.logo} />
      <Spacer type="md" />
      <Heading>{Localization.auth.jsConfSharingLogic}</Heading>
      <Spacer type="md" />
      <Button title={Localization.auth.login} />
    </Screen>
  );
};

export default Login;
