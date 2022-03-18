import React from "react"
import {ScreenContainer, SignUpButtonContainer, LogoImage } from "./styled"
import logo from "../../assets/logo (2).jpg"
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
import LoginForm from "./LoginForm"
import {goToSignUp} from "../../routes/coordinate"
import useUnProtectedPage from "../../hooks/useUnProtectedPage";


const LoginPage = ({setRightButtonAction}) =>{
   useUnProtectedPage()
    const navegando = useNavigate()
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm setRightButtonAction={setRightButtonAction}/>
            <SignUpButtonContainer>
               
                <Button
                    onClick={() => goToSignUp(navegando)}
                    fullWidth
                    color="primary"
                >
                    Não possui conta? Cadastre-se
                </Button>
              
            </SignUpButtonContainer>  
        </ScreenContainer>
    )
}
export default LoginPage