import { View, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import React from 'react';
import { Product } from '@e-commerce-sharling-logic/models';
import { styles } from './styles';
import { BodyText } from '../../atoms';
import { CircleFadeImage, TouchableIcon } from '../../molecules';
import { COLORS } from '@e-commerce-sharling-logic/ui';

interface ProductItemProps {
  containerStyle?: StyleProp<ViewStyle>;
  product: Product;
  onPress: () => void;
}

const ProductItem = ({
  containerStyle,
  product,
  onPress,
}: ProductItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, containerStyle]}>
      <View style={styles.headerContainer}>
        <CircleFadeImage uri={product.thumbnail} />
      </View>
      <View>
        <BodyText
          style={styles.titleContainer}
          numberOfLines={1}
          ellipsizeMode="tail"
          type="s4"
        >
          {product.title}
        </BodyText>
        <BodyText style={styles.category} type="s6">
          {product.category}
        </BodyText>
      </View>
      <View style={styles.footerContainer}>
        <BodyText numberOfLines={1} ellipsizeMode="tail" type="s3">
          ${product.price}
        </BodyText>
        <TouchableIcon
          name="arrow-forward-outline"
          size={15}
          color={COLORS.white}
          style={styles.goArrow}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
