import React from 'react';
import { Header, Loader, ProductItem, Screen } from '@mobile/components';
import {
  COLORS,
  Localization,
  useProducts,
} from '@e-commerce-sharling-logic/ui';
import { FlatList, RefreshControl } from 'react-native';
import { styles } from './styles';

const HomeScreen = () => {
  const { products, isLoading, error, fetchProducts, clearFetchProduct } =
    useProducts();

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
        renderItem={({ item }) => <ProductItem product={item} />}
        onEndReached={fetchProducts}
        onEndReachedThreshold={0.1}
      />
    </Screen>
  );
};

export default HomeScreen;
