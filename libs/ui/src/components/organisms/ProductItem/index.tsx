import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Product } from '@e-commerce-sharling-logic/models';
import { CircleFadedImage } from '../../molecules';
import { styles } from './styles';

interface ProductItemProps {
  product: Product;
  onPress: () => void;
  containerStyle?: React.CSSProperties;
}

const ProductItem = ({
  product,
  onPress,
  containerStyle = {},
}: ProductItemProps) => {
  return (
    <Box onClick={onPress} sx={{ ...styles.card, ...containerStyle }}>
      <Box sx={styles.headerContainer}>
        <CircleFadedImage uri={product.thumbnail} width={125} height={125} />
      </Box>
      <Box>
        <Typography sx={styles.titleContainer} variant="h4">
          {product.title}
        </Typography>
        <Typography sx={styles.category} variant="body2">
          {product.category}
        </Typography>
      </Box>
      <Box sx={styles.footerContainer}>
        <Typography variant="subtitle1">${product.price}</Typography>
        <IconButton onClick={onPress} sx={styles.goArrow}>
          <span className="material-icons">arrow_forward</span>
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductItem;
