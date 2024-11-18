import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import {
  CartItem,
  Localization,
  useStore,
} from '@e-commerce-sharling-logic/ui';
import { styles } from './styles';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    total,
    onAddQuantityInCart,
    onRemoveQuantityInCart,
    onRemoveFromCart,
    onPay,
    isLoading,
  } = useStore();

  const onSubmit = () => {
    onPay(() => {
      navigate('/success');
    });
  };

  if (cart.length === 0) {
    return (
      <Typography variant="h5" sx={styles.emptyCartText}>
        {Localization.home.emptyCart}
      </Typography>
    );
  }

  return (
    <Box sx={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onAdd={() => onAddQuantityInCart(item.id)}
              onSubstract={() => onRemoveQuantityInCart(item.id)}
              onRemove={() => onRemoveFromCart(item.id)}
            />
          ))}
        </Grid>

        {cart.length !== 0 && (
          <Grid item xs={12} md={4}>
            <Box sx={styles.cartTotalBox}>
              <Typography variant="h5" sx={styles.totalText}>
                {Localization.home.total}: ${total.toFixed(2)}
              </Typography>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onSubmit}
                  fullWidth
                >
                  {Localization.home.pay}
                </Button>
              )}
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Cart;
