import axios from "axios"
import {BASE_URL} from "../constants/urls" 
import {goToRecipesList} from "../routes/coordinate"
export const login = (body, clear, navegando, setRightButtonAction) =>{
   
    axios.post(`${BASE_URL}/user/login`, body, clear, navegando)
    .then((response)=>{
      localStorage.setItem("token", response.data.token)
      clear()
      goToRecipesList(navegando)
      setRightButtonAction("Logout")
    })
    .catch((error)=>{
      alert("Usuário não encontrado")
    })
  }

  export const signUp = (body, clear, navegando, setRightButtonAction) =>{
      axios.post(`${BASE_URL}/user/signup`, body, clear, navegando)
      .then((response)=>{
        localStorage.setItem("token", response.data.token)
        alert("Usuário Cadastrado Com Sucesso!")
        goToRecipesList(navegando)
        setRightButtonAction("Logout")
      })
      .catch((error)=>{
        alert("Erro ao cadastrar o usuário!")
       
      })
    }


 