import { GlobalStateProvider } from '@e-commerce-sharling-logic/ui';
import MainNavigator from './navigation/MainNavigator';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

export function App() {
  return (
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainNavigator />
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default App;
