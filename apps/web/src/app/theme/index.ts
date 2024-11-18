import { BORDER_RADIUS, COLORS } from '@e-commerce-sharling-logic/ui';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    text: {
      primary: COLORS.darkText,
      secondary: COLORS.lightText,
    },
    error: {
      main: COLORS.danger,
    },
    background: {
      default: COLORS.white,
    },
    divider: COLORS.border,
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h4: {
      color: COLORS.darkText,
    },
    body1: {
      color: COLORS.lightText,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Default button styles
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: `${BORDER_RADIUS.large}px`,
        },
        containedPrimary: {
          // Override text color for primary buttons
          color: COLORS.white, // Set to white or any custom color
        },
      },
    },
  },
});
