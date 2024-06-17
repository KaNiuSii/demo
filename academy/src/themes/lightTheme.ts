import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3282B8',  // Primary color
    },
    secondary: {
      main: '#BBE1FA',  // Secondary color
    },
    background: {
      default: '#1B262C',  // Background color
      paper: '#BBE1FA',    // Paper color
    },
    text: {
      primary: '#1B262C',  // Primary text color
      secondary: '#0F4C75', // Secondary text color
    },
  },
});
