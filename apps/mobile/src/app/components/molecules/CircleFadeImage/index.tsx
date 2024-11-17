import { View, Image, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface CircleFadeImageProps {
  width?: number;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  uri: string;
}

const CircleFadeImage = ({
  containerStyle,
  width = 50,
  height = 50,
  uri,
}: CircleFadeImageProps) => {
  const computedStyle = styles(width, height);

  return (
    <View
      style={[computedStyle.base, computedStyle.fadeContainer, containerStyle]}
    >
      <View style={[computedStyle.base, computedStyle.imageContainer]}>
        <Image source={{ uri }} style={computedStyle.image} />
      </View>
    </View>
  );
};

export default CircleFadeImage;
