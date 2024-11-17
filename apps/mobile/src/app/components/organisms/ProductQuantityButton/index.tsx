import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { TouchableIcon } from '../../molecules';
import { BodyText, Spacer } from '../../atoms';

interface ProductQuantityButtonProps {
  onAdd: () => void;
  onSubstract: () => void;
  quantity: number;
}

const ProductQuantityButton = ({
  onAdd,
  onSubstract,
  quantity,
}: ProductQuantityButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableIcon name="remove-outline" onPress={onSubstract} />
      <Spacer type="sm" arrangement="Horizontal" />
      <BodyText type="s4">{quantity}</BodyText>
      <Spacer type="sm" arrangement="Horizontal" />
      <TouchableIcon name="add" onPress={onAdd} />
    </View>
  );
};

export default ProductQuantityButton;
