import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IMAGES } from '../../../assets';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { activeLinkStyles, appBarStyles, container, logo } from './styles';
import { Localization } from '../../../localization';

function NavigationHeader() {
  return (
    <AppBar position="static" sx={appBarStyles}>
      <Toolbar>
        <img src={IMAGES.LOGO} style={logo} alt="Logo" />
        <Box sx={container}>
          <Button component={NavLink} to="/" sx={activeLinkStyles}>
            {Localization.navigation.home}
          </Button>
          <Button component={NavLink} to="/cart" sx={activeLinkStyles}>
            {Localization.navigation.cart}
          </Button>
          <Button component={NavLink} to="/profile" sx={activeLinkStyles}>
            {Localization.navigation.profile}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationHeader;
