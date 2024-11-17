import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductDetailScreen } from '@mobile/screens';
import { COLORS } from '@e-commerce-sharling-logic/ui';

export type ProductsParamList = {
  Products: undefined;
  ProductDetail: { id: number; name: string };
};

export const ProductStack = createNativeStackNavigator<ProductsParamList>();

export const ProductNavigator = () => {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: COLORS.white,
        },
      }}
      id={undefined}
      initialRouteName="Products"
    >
      <ProductStack.Screen name="Products" component={HomeScreen} />
      <ProductStack.Screen
        name="ProductDetail"
        initialParams={{ id: 1 }}
        component={ProductDetailScreen}
      />
    </ProductStack.Navigator>
  );
};
