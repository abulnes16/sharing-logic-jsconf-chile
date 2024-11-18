import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { Localization, useAuth } from '@e-commerce-sharling-logic/ui';
import { styles } from './style';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { isLoading, logout } = useAuth();

  const onLogout = () => {
    logout(() => {
      navigate('/');
    });
  };

  return (
    <Box sx={styles.screen}>
      <Typography sx={styles.heading} variant="h4" gutterBottom>
        {Localization.home.myProfile}
      </Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Button variant="contained" onClick={onLogout}>
          {Localization.auth.logout}
        </Button>
      )}
    </Box>
  );
};

export default Profile;
