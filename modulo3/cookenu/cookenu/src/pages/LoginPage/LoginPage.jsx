import React from "react"
import {ScreenContainer, InputContainer, LoginFormContainer, 
        SignUpButtonContainer, LogoImage } from "./styled"
import logo from "../../assets/logo (2).jpg"
import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
const LoginPage = () =>{
    const [form, onChange, clear] = useForm({
        email: "", password: ""
    })
    const onSubimitForm = (event) =>{    
        event.preventDefault()
        console.log(form)
        clear()
    }
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <InputContainer>
            <form onSubmit={onSubimitForm}>
                <TextField
                  name={"email"}
                  value={form.email}
                  onChange={onChange}
                  label={"E-mail"}
                  variant={"outlined"}
                  fullWidth
                  margin={"normal"}
                />
                <TextField
                  name={"password"}
                  value={form.password}
                  onChange={onChange}
                  label={"Senha"}
                  variant={"outlined"}
                  fullWidth
                  margin={"normal"}
                />
                <Button
                fullWidth
                variant={"contained"}
                color={"primary"}
                >
                Login
                </Button>
            </form>
            </InputContainer>
            
        </ScreenContainer>
    )
}
export default LoginPage