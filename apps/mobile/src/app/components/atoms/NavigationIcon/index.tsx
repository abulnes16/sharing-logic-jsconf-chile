import { COLORS } from '@e-commerce-sharling-logic/ui';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface NavigationIconProps {
  focused: boolean;
  color: string;
  size: number;
  name: string;
}

const NavigationIcon = ({
  name,
  focused,
  color,
  size,
}: NavigationIconProps) => {
  return (
    <Icon name={name} size={size} color={focused ? color : COLORS.darkText} />
  );
};

export default NavigationIcon;
