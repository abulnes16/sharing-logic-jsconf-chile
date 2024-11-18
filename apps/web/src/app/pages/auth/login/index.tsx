import { Localization, useAuth } from '@e-commerce-sharling-logic/ui';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { styles } from './styles';

function Login() {
  const { login, isLoading } = useAuth();
  return (
    <Box sx={styles.container}>
      {/* Left Side: Image */}
      <Box sx={styles.imageSection} />

      <Box sx={styles.contentSection}>
        <Typography variant="h4" sx={styles.header}>
          {Localization.auth.jsConfSharingLogic}
        </Typography>
        {isLoading ? (
          <CircularProgress sx={styles.loader} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={styles.button}
            onClick={login}
          >
            {Localization.auth.login}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Login;
