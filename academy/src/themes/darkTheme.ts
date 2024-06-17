import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3282B8',
    },
    secondary: {
      main: '#BBE1FA',
    },
    background: {
      default: '#1B262C',
      paper: '#0F4C75',
    },
    text: {
      primary: '#BBE1FA',
      secondary: '#3282B8',
    },
  },
});
