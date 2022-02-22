import React from "react"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import SignUpForm from "./SignUpForm"
import {ScreenContainer} from "./styled"
const SignUpLogin = () =>{
    useUnProtectedPage()
    return(
        <ScreenContainer>
            <SignUpForm/>
            </ScreenContainer>
    )
}
export default SignUpLogin