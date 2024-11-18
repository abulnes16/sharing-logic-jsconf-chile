import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { styles } from './styles';
import {
  Localization,
  useProducts,
  ProductItem,
} from '@e-commerce-sharling-logic/ui';

function Home() {
  const { products, isLoading } = useProducts();

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.heading} gutterBottom>
        {Localization.home.ourProducts}
      </Typography>
      {isLoading || products === undefined ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={5}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductItem
                product={product}
                onPress={() => console.log('Product clicked')}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Home;
