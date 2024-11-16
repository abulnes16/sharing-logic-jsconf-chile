import { COLORS } from '@e-commerce-sharling-logic/ui';
import React from 'react';
import {
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface TouchableIconProps extends TouchableOpacityProps {
  name: string;
  size?: number;
  color?: string;
  iconStyle?: StyleProp<ViewStyle>;
}

const TouchableIcon = ({
  name,
  size = 25,
  color = COLORS.darkText,
  iconStyle = {},
  ...props
}: TouchableIconProps) => {
  return (
    <TouchableOpacity {...props}>
      <Icon name={name} size={size} color={color} style={iconStyle} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
