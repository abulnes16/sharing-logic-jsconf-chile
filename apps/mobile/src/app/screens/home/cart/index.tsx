import React from 'react';
import { View, Text, FlatList } from 'react-native';
import {
  BodyText,
  Button,
  CartItem,
  Header,
  Loader,
  Screen,
  Spacer,
} from '@mobile/components';
import { Localization, useStore } from '@e-commerce-sharling-logic/ui';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartParamList } from '@mobile/navigation';

interface CartScreenProps
  extends NativeStackScreenProps<CartParamList, 'CartDisplay'> {}

const CartScreen = ({ navigation }: CartScreenProps) => {
  const {
    cart,
    onRemoveQuantityInCart,
    onAddQuantityInCart,
    onRemoveFromCart,
    cartHasProducts,
    total,
    onPay,
    isLoading,
  } = useStore();

  const onSubmit = () => {
    onPay(() => {
      navigation.replace('Success');
    });
  };

  const onRenderButton = () => {
    if (!cartHasProducts) return;

    if (isLoading) return <Loader />;

    return <Button title={Localization.home.pay} onPress={onSubmit} />;
  };

  return (
    <Screen contentStyle={styles.screen}>
      <Header title={Localization.home.myCart} />
      <FlatList
        contentContainerStyle={styles.list}
        data={cart}
        ListEmptyComponent={<BodyText>{Localization.home.emptyCart}</BodyText>}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onAdd={() => onAddQuantityInCart(item.id)}
            onSubstract={() => onRemoveQuantityInCart(item.id)}
            onRemove={() => onRemoveFromCart(item.id)}
          />
        )}
      />

      {cartHasProducts && (
        <>
          <View style={styles.totalContainer}>
            <BodyText style={styles.totalText} type="s1">
              {Localization.home.total}:
            </BodyText>
            <Spacer arrangement="Horizontal" type="xs" />
            <BodyText style={styles.totalText} type="s1">
              ${total.toFixed(2)}
            </BodyText>
          </View>
          <Spacer type="md" />
        </>
      )}

      {onRenderButton()}
    </Screen>
  );
};

export default CartScreen;
