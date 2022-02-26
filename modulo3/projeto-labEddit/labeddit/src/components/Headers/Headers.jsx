import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { HeadersContainer } from "./styled";
import Button from "@mui/material/Button";
import { goToFeed, goToLogin } from "../../Router/coordinates";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  return (
    <AppBar position="static">
      <HeadersContainer>
        <Button onClick={() => goToFeed(navigate)} color="inherit">
          Labeddit
        </Button>
        <Button onClick={() => goToLogin(navigate)} color="inherit">
          Login
        </Button>
      </HeadersContainer>
    </AppBar>
  );
}
