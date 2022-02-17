import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import {Butao, TelaLogin, ContainerButtun} from "./styled"
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
        console.log("before: ", email, senha)
        const body = {
            email: email, 
            password: senha
        }
        axios.post(`${BASE_URL}/login`, body)
        .then((response)=>{
            console.log(response.data)
            window.localStorage.setItem("token",response.data.token)
            telaAdm()
        })
        .catch((error)=>{
            console.log(error.response)
            alert("Usuario ou senhas inválido")
        })
        
    }
    
    return (
        <div>
            
            <input
            placeholder={"Email"}
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
            <input
            placeholder={"Senha"}
            type="password"
            value={senha}
            onChange={onChangeSenha}
            />
            <div>
            <button onClick={voltar}>voltar</button>
            <button onClick={login}>Entrar</button>
            </div>
               
        </div>
    )
}
export default Login
