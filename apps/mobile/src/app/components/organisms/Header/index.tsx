import React from 'react';
import { View, Image, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heading } from '../../atoms';
import { TouchableIcon } from '../../molecules';
import { styles } from './styles';
import { IMAGES } from '@e-commerce-sharling-logic/ui';
import { HeadingType } from '@e-commerce-sharling-logic/models';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showLogo?: boolean;
  titleSize?: HeadingType;
  containerStyle?: StyleProp<ViewStyle>;
}

const Header = ({
  title,
  showBackButton = false,
  showLogo = true,
  titleSize = 'h3',
  containerStyle = {},
}: HeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <View style={[styles.headingContainer, containerStyle]}>
      {showBackButton && (
        <TouchableIcon
          style={styles.backArrow}
          onPress={goBack}
          name="arrow-back"
          size={20}
        />
      )}
      {showLogo && (
        <Image source={{ uri: IMAGES.LOGO }} style={styles.smallLogo} />
      )}
      <Heading numberOfLines={1} type={titleSize}>
        {title}
      </Heading>
    </View>
  );
};

export default Header;
