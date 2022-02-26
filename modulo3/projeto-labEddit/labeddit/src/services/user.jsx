import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeed } from "../Router/coordinates"

export const login = (body, clear, navigate) =>{
    axios.post(`${BASE_URL}/users/login`, body, clear, navigate)
    .then((response)=>{
        clear()
        localStorage.setItem("token", response.data.token)
        goToFeed(navigate)   
    })
    .catch((error) =>{
        alert("Email ou senha inválidos")
    })
}
export const signUp = (body, clear, navigate) =>{
    axios.post(`${BASE_URL}/users/signup`, body, clear, navigate)
    .then((response)=>{
        localStorage.setItem("token", response.data.token)
        clear()
        alert("Email Cadastrado Com Sucesso!")
        goToFeed(navigate)      
    })
    .catch((error)=>{
        alert(error.response.data)
    })
}