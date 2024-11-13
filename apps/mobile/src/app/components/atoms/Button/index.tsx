import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import BodyText from '../BodyText';
import { styles } from './style';
import { ButtonType } from '@e-commerce-sharling-logic/models';

interface ButtonProps extends TouchableOpacityProps {
  contentStyle?: StyleProp<ViewStyle>;
  title?: string;
  type?: ButtonType;
}

const Button = ({
  title = '',
  children,
  contentStyle = {},
  style,
  type = 'primary',
  ...props
}: ButtonProps) => {
  const buttonStyle = [styles.base, styles[type], contentStyle];

  return (
    <TouchableOpacity style={[styles.touchable, style]} {...props}>
      <View style={buttonStyle}>
        {title ? <BodyText style={styles.text}>{title}</BodyText> : children}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
