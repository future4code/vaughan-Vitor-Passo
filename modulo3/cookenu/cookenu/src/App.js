import { ThemeProvider } from "@mui/material";
import React, {useState} from "react";
import theme from "./constants/theme";
import Router from "./routes/Router"
import { BrowserRouter } from "react-router-dom";
import Headers from "./components/Headers/Headers";
const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonAction, setRightButtonAction ] = useState(token ? "Logout" : "Login")   
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
       <Headers 
       rightButtonAction={rightButtonAction}
        setRightButtonAction={setRightButtonAction}
       />
      <Router setRightButtonAction={setRightButtonAction}/>
      </BrowserRouter>
      </ThemeProvider>
    
  );
}

export default App;
