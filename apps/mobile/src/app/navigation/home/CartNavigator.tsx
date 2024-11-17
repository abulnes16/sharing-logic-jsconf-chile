import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CartScreen,
  HomeScreen,
  ProductDetailScreen,
  SuccessCartScreen,
} from '@mobile/screens';
import { COLORS } from '@e-commerce-sharling-logic/ui';

export type CartParamList = {
  CartDisplay: undefined;
  Success: undefined;
};

export const CartStack = createNativeStackNavigator<CartParamList>();

export const CartNavigator = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: COLORS.white,
        },
      }}
      id={undefined}
      initialRouteName="CartDisplay"
    >
      <CartStack.Screen name="CartDisplay" component={CartScreen} />
      <CartStack.Screen name="Success" component={SuccessCartScreen} />
    </CartStack.Navigator>
  );
};
