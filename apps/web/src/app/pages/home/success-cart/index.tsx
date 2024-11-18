import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { successCartStyles } from './styles';
import { IMAGES, Localization } from '@e-commerce-sharling-logic/ui';

const SuccessCart = () => {
  const navigate = useNavigate();

  const onThanks = () => {
    navigate('/cart');
  };

  return (
    <Box sx={successCartStyles.screen}>
      <img
        src={IMAGES.SUCCESS}
        alt="Success"
        style={successCartStyles.success}
      />
      <Box sx={successCartStyles.spacerMd} />
      <Typography variant="h4" component="h1">
        {Localization.home.thanksForYourPurchase}
      </Typography>
      <Box sx={successCartStyles.spacerSm} />
      <Typography variant="h5">
        {Localization.home.weHopeYouEnjoyJSConf}
      </Typography>
      <Box sx={successCartStyles.spacerXl} />
      <Button
        variant="contained"
        sx={successCartStyles.button}
        onClick={onThanks}
      >
        {Localization.home.thanks}
      </Button>
    </Box>
  );
};

export default SuccessCart;
