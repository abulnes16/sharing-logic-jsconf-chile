import React from 'react';
import { Text, TextProps } from 'react-native';
import { TextType } from '@e-commerce-sharling-logic/models';
import { styles } from './styles';

interface BodyTextProps extends TextProps {
  type?: TextType;
}

const BodyText = ({
  children,
  style,
  type = 's3',
  ...props
}: BodyTextProps) => {
  const textStyle = [styles[type], style];

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

export default BodyText;
