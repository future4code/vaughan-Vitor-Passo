import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import { ContainerHeader } from './styled';
import Button from '@mui/material/Button';
// import  { goToRecipesList, goToLogin } from "../../routes/coordinate"
const Headers = () => {
    // const navegando = useNavigate()
    return (

        <AppBar position="static">
            <ContainerHeader>
                <Link to={"/"}>
                <Button color="inherit">Cookenu</Button>
                </Link>
                <Link to={"/login"}>
                <Button color="inherit">Login</Button>
                </Link>
            </ContainerHeader>
        </AppBar>

    );
}

export default Headers