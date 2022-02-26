import { createTheme } from '@mui/material';
import { primary, neutralColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: "white"
    },
    text: {
      primary: neutralColor
    }
  }
});
export default theme 