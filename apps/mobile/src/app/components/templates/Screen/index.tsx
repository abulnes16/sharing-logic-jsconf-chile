import React from 'react';
import {
  View,
  SafeAreaView,
  ViewProps,
  ScrollView,
  StyleProp,
  ViewStyle,
  StatusBar,
} from 'react-native';
import { styles } from './styles';

interface ScreenProps extends ViewProps {
  isScrollable?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
}

const Screen = ({
  children,
  isScrollable = false,
  contentStyle = {},
  style,
  ...props
}: React.PropsWithChildren<ScreenProps>) => {
  const flattenContentStyles = [styles.content, contentStyle];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[styles.screen, style]} {...props}>
        {isScrollable ? (
          <ScrollView style={flattenContentStyles}>{children}</ScrollView>
        ) : (
          <View style={flattenContentStyles}>{children}</View>
        )}
      </SafeAreaView>
    </>
  );
};

export default Screen;
