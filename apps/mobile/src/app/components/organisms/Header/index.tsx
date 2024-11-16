import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heading } from '../../atoms';
import { TouchableIcon } from '../../molecules';
import { styles } from './styles';

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
      <Heading type="h3">{title}</Heading>
    </View>
  );
};

export default Header;
