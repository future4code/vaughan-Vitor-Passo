import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import React from "react"
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/user"
import { useNavigate } from "react-router-dom"
import {InputContainer, ScreenContainer} from "./styled"

const SignUpForm = ({setRightButtonAction}) =>{
  const navegando = useNavigate()
    const [form, onChange, clear] = useForm({
        name: "", email: "", password:""
    })
    const SendRegister = (event) =>{
        event.preventDefault()
        signUp(form, clear, navegando, setRightButtonAction)
        
        clear()
        
    }
    return(
        <ScreenContainer>
        <InputContainer>
            <form onSubmit={SendRegister}>
            <TextField
                  name={"name"}
                  value={form.name}
                  onChange={onChange}
                  label={"Nome"}
                  variant={"outlined"}
                  fullWidth
                  margin={"normal"}
                  required
                  type={"text"}
                />

                <TextField
                  name={"email"}
                  value={form.email}
                  onChange={onChange}
                  label={"E-mail"}
                  variant={"outlined"}
                  fullWidth
                  margin={"normal"}
                  required
                  type={"email"}
                />
                <TextField
                  name={"password"}
                  value={form.password}
                  onChange={onChange}
                  label={"Senha"}
                  variant={"outlined"}
                  fullWidth
                  margin={"normal"}
                  required
                  type="password"
                />
                <Button
                type="submit"
                fullWidth
                variant={"contained"}
                color={"primary"}
                >
                Cadastrar
                </Button>
            </form>
            </InputContainer>
            </ScreenContainer>
    )
}
export default SignUpForm