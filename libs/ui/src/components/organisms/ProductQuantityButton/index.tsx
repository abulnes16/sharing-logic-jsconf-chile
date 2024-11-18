// ProductQuantityButton.tsx
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { containerStyle, quantityTextStyle } from './styles';

interface ProductQuantityButtonProps {
  onAdd: () => void;
  onSubstract: () => void;
  quantity: number;
  contentContainerStyle?: React.CSSProperties;
}

const ProductQuantityButton = ({
  onAdd,
  onSubstract,
  quantity,
  contentContainerStyle = {},
}: ProductQuantityButtonProps) => {
  return (
    <Box sx={{ ...containerStyle, ...contentContainerStyle }}>
      <IconButton onClick={onSubstract} size="small">
        <Remove />
      </IconButton>
      <Typography variant="body1" sx={quantityTextStyle}>
        {quantity}
      </Typography>
      <IconButton onClick={onAdd} size="small">
        <Add />
      </IconButton>
    </Box>
  );
};

export default ProductQuantityButton;
