import React from "react"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import SignUpForm from "./SignUpForm"
import {ScreenContainer} from "./styled"
const SignUpLogin = ({setRightButtonAction}) =>{
    useUnProtectedPage()
    return(
        <ScreenContainer>
            <SignUpForm setRightButtonAction={setRightButtonAction}/>
            </ScreenContainer>
    )
}
export default SignUpLogin