import { createTheme } from '@mui/material';
import { primary, neutralColor, second } from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: primary,
            contrastText: "white"
        },
        second: {
            main: second,
            contrastText: "white"
        },
        text: {
            primary: neutralColor
        }
    }
});
export default theme