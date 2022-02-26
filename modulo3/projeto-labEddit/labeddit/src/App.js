import Router from "../src/Router/Router"
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
     <Router/>
    </ThemeProvider>
  );
}

export default App;
