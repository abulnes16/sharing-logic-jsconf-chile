import { productDetailStyles } from './styles';
import {
  Box,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  CircleFadedImage,
  Localization,
  ProductQuantityButton,
  useProductDetail,
  useStore,
} from '@e-commerce-sharling-logic/ui';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, isLoading } = useProductDetail(Number(id));
  const { quantity, addQuantity, removeQuantity, onAddToCart } = useStore();
  const [showAlert, setShowAlert] = useState(false);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  const onSubmitToCart = () => {
    if (quantity === 0) {
      setShowAlert(true);
      return;
    }
    onAddToCart(product);
    navigate(-1);
  };

  return (
    <Box sx={productDetailStyles.container}>
      <Grid container spacing={3}>
        {/* Left section (Image) */}
        <Grid item xs={12} md={6}>
          <CircleFadedImage uri={product.thumbnail} width={200} height={200} />
        </Grid>

        {/* Right section (Details) */}
        <Grid item xs={12} md={6}>
          <Box sx={productDetailStyles.detailsContainer}>
            <Typography variant="h4" sx={productDetailStyles.title}>
              {product.title}
            </Typography>
            <Typography variant="h6" sx={productDetailStyles.brandCategory}>
              {product.brand || product.category}
            </Typography>
            <Typography variant="body1" sx={productDetailStyles.description}>
              {product.description}
            </Typography>

            <Box sx={productDetailStyles.priceRow}>
              <Typography variant="h5" sx={productDetailStyles.price}>
                ${product.price}
              </Typography>
              <ProductQuantityButton
                onAdd={() => addQuantity(product.stock)}
                onSubstract={removeQuantity}
                quantity={quantity}
              />
            </Box>

            {/* Add to cart button */}
            <Button
              variant="contained"
              color="secondary"
              sx={productDetailStyles.addToCartButton}
              onClick={onSubmitToCart}
            >
              {Localization.home.addToCart}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="warning">{Localization.home.emptyProduct}</Alert>
      </Snackbar>
    </Box>
  );
}

export default ProductDetail;
