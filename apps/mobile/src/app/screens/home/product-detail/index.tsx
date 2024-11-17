import React from 'react';
import {
  BadgeText,
  BodyText,
  Button,
  CircleFadeImage,
  Header,
  Heading,
  Loader,
  ProductQuantityButton,
  Screen,
  Spacer,
} from '@mobile/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductsParamList } from '@mobile/navigation';
import {
  COLORS,
  Localization,
  useProductDetail,
  useStore,
} from '@e-commerce-sharling-logic/ui';
import { View } from 'react-native';
import { styles } from './style';

interface ProductDetailProps
  extends NativeStackScreenProps<ProductsParamList, 'ProductDetail'> {}

const ProductDetails = ({ route, navigation }: ProductDetailProps) => {
  const { id } = route.params;

  const { isLoading, product } = useProductDetail(id);
  const { quantity, addQuantity, removeQuantity, onAddToCart } = useStore();

  const onSubmitToCart = () => {
    if (quantity === 0) return;
    onAddToCart(product);
    navigation.goBack();
  };

  return (
    <Screen isScrollable contentStyle={styles.screen}>
      <Header
        showBackButton
        title={''}
        showLogo={false}
        titleSize="h6"
        containerStyle={styles.header}
      />
      {isLoading ? (
        <Loader fullScreen />
      ) : (
        <View>
          <CircleFadeImage
            containerStyle={styles.image}
            uri={product.thumbnail}
            width={125}
            height={125}
          />
          <Heading type="h6">{product.title}</Heading>
          <Spacer type="sm" />
          <View style={styles.row}>
            <BodyText style={styles.category} type="s3">
              {product.brand ?? product.category}
            </BodyText>
            <BadgeText
              text={product.rating.toString()}
              icon="star"
              iconColor={COLORS.secondary}
            />
          </View>
          <Spacer type="sm" />
          <BodyText type="s4">{product.description}</BodyText>
          <Spacer type="lg" />
          <View>
            <View style={styles.row}>
              <BodyText style={styles.price} type="s1">
                ${product.price}
              </BodyText>
              <ProductQuantityButton
                onAdd={() => addQuantity(product.stock)}
                quantity={quantity}
                onSubstract={removeQuantity}
              />
            </View>
            <Spacer type="md" />
            <Button
              type="secondary"
              title={Localization.home.addToCart}
              onPress={onSubmitToCart}
            />
          </View>
        </View>
      )}
    </Screen>
  );
};

export default ProductDetails;
