import React from 'react';
import { View, Text, Image } from 'react-native';
import { BodyText, Button, Heading, Screen, Spacer } from '@mobile/components';
import { IMAGES, Localization } from '@e-commerce-sharling-logic/ui';
import { styles } from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartParamList } from '@mobile/navigation';

interface SuccessCartProps
  extends NativeStackScreenProps<CartParamList, 'Success'> {}

const SuccessCart = ({ navigation }: SuccessCartProps) => {
  const onThanks = () => {
    navigation.reset({ index: 0, routes: [{ name: 'CartDisplay' }] });
  };

  return (
    <Screen contentStyle={styles.screen}>
      <Image source={{ uri: IMAGES.SUCCESS }} style={styles.success} />
      <Spacer type="md" />
      <Heading>{Localization.home.thanksForYourPurchase}</Heading>
      <Spacer type="sm" />
      <BodyText type="s2">{Localization.home.weHopeYouEnjoyJSConf}</BodyText>
      <Spacer type="xl" />
      <Button title={Localization.home.thanks} onPress={onThanks} />
    </Screen>
  );
};

export default SuccessCart;
