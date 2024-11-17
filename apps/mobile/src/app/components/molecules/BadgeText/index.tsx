import React from 'react';
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { BodyText } from '../../atoms';
import { COLORS } from '@e-commerce-sharling-logic/ui';

interface BadgeTextProps {
  icon?: string;
  iconColor?: string;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const BadgeText = ({ text, icon, iconColor }: BadgeTextProps) => {
  return (
    <View style={styles.badge}>
      {icon && (
        <Icon
          style={styles.icon}
          name={icon}
          color={iconColor ?? COLORS.primary}
          size={15}
        />
      )}
      <BodyText style={styles.text} type="s5">
        {text}
      </BodyText>
    </View>
  );
};

export default BadgeText;
