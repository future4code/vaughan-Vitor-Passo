import React from "react"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import SignUpForm from "./SignUpForm"
import {ScreenContainer, LogoImage} from "./styled"
import LogoMarca from "../../assets/logo (2).jpg" 
const SignUpLogin = ({setRightButtonAction}) =>{
    useUnProtectedPage()
    return(
        <ScreenContainer>
            <LogoImage src={LogoMarca} alt={"Logo"}/>
            <SignUpForm setRightButtonAction={setRightButtonAction}/>
            </ScreenContainer>
    )
}
export default SignUpLogin