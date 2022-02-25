// import React, { useEffect } from "react"
import {InputContainer} from "./styled"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/user"
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
const LoginForm = ({setRightButtonAction}) =>{
    const navegando = useNavigate()
    const [isLoading, setLoading] = useState(false)
    const [form, onChange, clear] = useForm({
        email: "", password: ""
    })
    const onSubimitForm = (event) =>{    
        event.preventDefault()
        login(form, clear, navegando, setRightButtonAction, setLoading)
        
    }
    return(
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
                { isLoading ? <CircularProgress color="inherit" size={24}/> : <>Login!</> }
                
                </Button>
            </form>
            </InputContainer>
    )
}
export default LoginForm