import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToRecipesList } from "../routes/coordinate"
export const createRecipe = (body, clear, setLoading, navigate) =>{
    setLoading(true)
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((response)=>{
      alert("Receita Cadastrada Com Sucesso!")
      clear()
      setLoading(false)
      goToRecipesList(navigate)
    })
    .catch((error)=>{
        alert("Erro ao criar receita! Tente novamente mais tarde!")
        setLoading(false)
    })
}