import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { CircleFadeImage, TouchableIcon } from '../../molecules';
import { BodyText } from '../../atoms';
import ProductQuantityButton from '../ProductQuantityButton';
import { CartProduct } from '@e-commerce-sharling-logic/models';
import { COLORS } from '@e-commerce-sharling-logic/ui';

interface CartItemProps {
  item: CartProduct;
  onAdd: () => void;
  onSubstract: () => void;
  onRemove: () => void;
}

const CartItem = ({ item, onAdd, onRemove, onSubstract }: CartItemProps) => {
  return (
    <View style={styles.item}>
      <CircleFadeImage width={30} height={30} uri={item.image} />
      <BodyText
        style={styles.productName}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.name}
      </BodyText>
      <ProductQuantityButton
        contentContainerStyle={styles.controls}
        onAdd={onAdd}
        quantity={item.quantity}
        onSubstract={onSubstract}
      />
      <TouchableIcon
        style={styles.deleteButton}
        size={20}
        name="trash-outline"
        onPress={onRemove}
        color={COLORS.white}
      />
    </View>
  );
};

export default CartItem;
