import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import CocomoCalculator from './components/CocomoCalculator';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CocomoCalculator />
    </ThemeProvider>
  );
}

export default App; 