import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';
import { ContainerHeader } from './styled';
import Button from '@mui/material/Button';
import  { goToRecipesList, goToLogin } from "../../routes/coordinate"
const Headers = () => {
    const navegando = useNavigate()
    return (

        <AppBar position="static">
            <ContainerHeader>
                <Button onClick={() => goToRecipesList(navegando)} color="inherit">Cookenu</Button>
                <Button onClick={() => goToLogin(navegando)} color="inherit">Login</Button>
            </ContainerHeader>
        </AppBar>

    );
}

export default Headers