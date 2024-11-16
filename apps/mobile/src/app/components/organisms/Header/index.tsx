import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heading } from '../../atoms';
import { TouchableIcon } from '../../molecules';
import { styles } from './styles';
import { IMAGES } from '@e-commerce-sharling-logic/ui';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header = ({ title, showBackButton = false }: HeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.headingContainer}>
      {showBackButton && (
        <TouchableIcon
          style={styles.backArrow}
          onPress={goBack}
          name="arrow-back"
        />
      )}
      <Image source={{ uri: IMAGES.LOGO }} style={styles.smallLogo} />
      <Heading type="h3">{title}</Heading>
    </View>
  );
};

export default Header;
