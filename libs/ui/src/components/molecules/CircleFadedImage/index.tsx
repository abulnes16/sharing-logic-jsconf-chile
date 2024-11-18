import React from 'react';
import { Box } from '@mui/material';
import { styles } from './styles';

interface CircleFadeImageProps {
  width?: number;
  height?: number;
  containerStyle?: React.CSSProperties;
  uri: string;
}

const CircleFadeImage = ({
  width = 50,
  height = 50,
  containerStyle,
  uri,
}: CircleFadeImageProps) => {
  const computedStyle = styles(width, height);

  return (
    <Box
      sx={{
        ...computedStyle.base,
        ...computedStyle.fadeContainer,
        ...containerStyle,
      }}
    >
      <Box sx={{ ...computedStyle.base, ...computedStyle.imageContainer }}>
        <img src={uri} alt="product thumbnail" style={computedStyle.image} />
      </Box>
    </Box>
  );
};

export default CircleFadeImage;
