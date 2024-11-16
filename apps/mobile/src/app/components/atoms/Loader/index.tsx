import {
  ActivityIndicatorProps,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { COLORS } from '@e-commerce-sharling-logic/ui';
import { styles } from './styles';

interface LoaderProps extends ActivityIndicatorProps {
  containerStyle?: StyleProp<ViewStyle>;
  fullScreen?: boolean;
}

const Loader = ({
  color,
  containerStyle = {},
  style,
  size = 'large',
  fullScreen = false,
  ...props
}: LoaderProps) => {
  return (
    <View style={[containerStyle]}>
      <ActivityIndicator
        {...props}
        size={size}
        color={color ?? COLORS.secondary}
        style={[style, fullScreen && styles.fullScreen]}
      />
    </View>
  );
};

export default Loader;
