import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { Product } from '@e-commerce-sharling-logic/models';
import { styles } from './styles';
import { BodyText, Heading } from '../../atoms';
import { TouchableIcon } from '../../molecules';
import { COLORS } from '@e-commerce-sharling-logic/ui';

interface ProductItemProps {
  containerStyle?: StyleProp<ViewStyle>;
  product: Product;
}

const ProductItem = ({ containerStyle, product }: ProductItemProps) => {
  return (
    <TouchableOpacity style={[styles.card, containerStyle]}>
      <View style={styles.headerContainer}>
        <View style={styles.fadeContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />
          </View>
        </View>
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
