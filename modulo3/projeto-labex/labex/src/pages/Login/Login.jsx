import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import {Butao, TelaLogin, ContainerButtun} from "./styled"
import {MainContainer, Div, InputContainer, ButtonContainer, StyledInput, StyledButton} from "./styled"
import { BASE_URL } from "../../constant/Url"
const Login = () =>{
    const navegando = useNavigate()
    const telaAdm = () => {
        navegando("/adm/viagem/lista")
    }
    const voltar = () => {
        navegando(-1)
    }

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const onChangeSenha = (event) =>{
        setSenha(event.target.value)
    }

    const login = () => {
       
        const body = {
            email: email, 
            password: senha
        }
        axios.post(`${BASE_URL}/login`, body)
        .then((response)=>{
           
            window.localStorage.setItem("token",response.data.token)
            telaAdm()
        })
        .catch((error)=>{
            
            alert("Usuario ou senhas inválido")
        })
        
    }
    
    return (
        <Div>
        <MainContainer>
        <InputContainer>
            <StyledInput
            placeholder={"Email"}
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
            <StyledInput
            placeholder={"Senha"}
            type="password"
            value={senha}
            onChange={onChangeSenha}
            />
            </InputContainer>
            <ButtonContainer>
            <StyledButton onClick={voltar}>voltar</StyledButton>
            <StyledButton onClick={login}>Entrar</StyledButton>
            </ButtonContainer>
               
        </MainContainer>
        </Div>
    )
}
export default Login
