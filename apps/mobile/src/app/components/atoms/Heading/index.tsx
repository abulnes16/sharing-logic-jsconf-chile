import React from 'react';
import { Text, TextProps } from 'react-native';
import { HeadingType } from '@e-commerce-sharling-logic/models';
import { styles } from './styles';

interface HeadingProps extends TextProps {
  type?: HeadingType;
}

const Heading = ({ children, style, type = 'h2', ...props }: HeadingProps) => {
  const textStyle = [styles.base, styles[type], style];

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

export default Heading;
