import { Box, IconButton, Typography } from '@mui/material';
import { CartProduct } from '@e-commerce-sharling-logic/models';
import ProductQuantityButton from '../ProductQuantityButton';
import { cartItemStyles } from './styles';
import { Delete } from '@mui/icons-material';
import CircleFadeImage from '../../molecules/CircleFadedImage';

interface CartItemProps {
  item: CartProduct;
  onAdd: () => void;
  onSubstract: () => void;
  onRemove: () => void;
}

const CartItem = ({ item, onAdd, onRemove, onSubstract }: CartItemProps) => {
  return (
    <Box sx={cartItemStyles.item}>
      <Box sx={cartItemStyles.imageWrapper}>
        <CircleFadeImage uri={item.image} width={40} height={40} />
      </Box>

      <Typography sx={cartItemStyles.productName} noWrap>
        {item.name}
      </Typography>

      <ProductQuantityButton
        contentContainerStyle={cartItemStyles.controls}
        onAdd={onAdd}
        quantity={item.quantity}
        onSubstract={onSubstract}
      />

      <IconButton
        sx={cartItemStyles.deleteButton}
        onClick={onRemove}
        color="inherit"
      >
        <Delete />
      </IconButton>
    </Box>
  );
};

export default CartItem;
