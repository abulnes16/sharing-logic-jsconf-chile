import React from 'react';
import { Header, Loader, ProductItem, Screen } from '@mobile/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  COLORS,
  Localization,
  useProducts,
} from '@e-commerce-sharling-logic/ui';
import { FlatList, RefreshControl } from 'react-native';
import { styles } from './styles';
import { ProductsParamList } from '../../../navigation/home/ProductsNavigator';

export interface HomeScreenProps
  extends NativeStackScreenProps<ProductsParamList, 'Products'> {}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { products, isLoading, fetchProducts, clearFetchProduct } =
    useProducts();

  const onSeeDetails = (productId: number, productName: string) => {
    navigation.navigate('ProductDetail', { id: productId, name: productName });
  };

  return (
    <Screen>
      <Header title={Localization.home.ourProducts} />
      <FlatList
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            onRefresh={clearFetchProduct}
            refreshing={isLoading}
            colors={[COLORS.primary, COLORS.secondary]}
          />
        }
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={() => isLoading && <Loader />}
        refreshing={isLoading}
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onPress={() => onSeeDetails(item.id, item.title)}
          />
        )}
        onEndReached={fetchProducts}
        onEndReachedThreshold={0.1}
      />
    </Screen>
  );
};

export default HomeScreen;
