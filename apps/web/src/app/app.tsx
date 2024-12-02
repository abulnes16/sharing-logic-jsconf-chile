import {
  GlobalStateProvider,
  useNotification,
} from '@e-commerce-sharling-logic/ui';
import MainNavigator from './navigation/MainNavigator';
import { Alert, CssBaseline, Snackbar, ThemeProvider } from '@mui/material';
import { theme } from './theme';

export function MainApp() {
  const { notification, dismiss } = useNotification();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainNavigator />
      <Snackbar
        open={notification.showNotification}
        autoHideDuration={6000}
        onClose={dismiss}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={notification.type}>{notification.title}</Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export function App() {
  return (
    <GlobalStateProvider>
      <MainApp />
    </GlobalStateProvider>
  );
}

export default App;
