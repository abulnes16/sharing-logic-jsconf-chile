import React from 'react';
import { View, ViewProps } from 'react-native';
import { SpacingType } from '@e-commerce-sharling-logic/ui';
import { styles } from './style';

interface SpacerProps extends ViewProps {
  type?: SpacingType;
  arrangement?: 'Vertical' | 'Horizontal';
}

const Spacer = ({
  type,
  style,
  arrangement = 'Vertical',
  ...props
}: SpacerProps) => {
  const spacerStyle = [styles[`${type}${arrangement}`], style];
  return <View style={spacerStyle} {...props} />;
};

export default Spacer;
