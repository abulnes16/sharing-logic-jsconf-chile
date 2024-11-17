import React from 'react';
import { View, Text, FlatList } from 'react-native';
import {
  BodyText,
  Button,
  CartItem,
  Header,
  Screen,
  Spacer,
} from '@mobile/components';
import { Localization, useStore } from '@e-commerce-sharling-logic/ui';
import { styles } from './styles';

const CartScreen = () => {
  const {
    cart,
    onRemoveQuantityInCart,
    onAddQuantityInCart,
    onRemoveFromCart,
    cartHasProducts,
    total,
  } = useStore();
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

      {cartHasProducts && <Button title={Localization.home.pay} />}
    </Screen>
  );
};

export default CartScreen;
