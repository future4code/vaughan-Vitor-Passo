import axios from "axios"
import { BASE_URL } from "../constants/urls"
export const createRecipe = (body, clear) =>{
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((response)=>{
      alert("Receita Cadastrada Com Sucesso!")
      clear()
    })
    .catch((error)=>{
        alert("Erro ao criar receita! Tente novamente mais tarde!")
    })
}