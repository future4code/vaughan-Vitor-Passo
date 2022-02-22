import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import { ContainerHeader } from './styled';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToRecipesList } from '../../routes/coordinate';
// import  { goToRecipesList, goToLogin } from "../../routes/coordinate"
const Headers = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const onClickLogin = () =>{
        if (token) {
            goToRecipesList(navigate)
        }
        else{
            goToLogin(navigate)
        }
    }
    return (

        <AppBar position="static">
            <ContainerHeader>
                <Link to={"/"}>
                <Button color="inherit">Cookenu</Button>
                </Link>

                <Button onClick={onClickLogin} color="inherit">Login</Button>
            </ContainerHeader>
        </AppBar>

    );
}

export default Headers