import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import {goToRecipesList} from "../routes/coordinate"
const useUnProtectedPage = () =>{
    const navegando = useNavigate()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")

        if (token) {
            goToRecipesList(navegando)
        }
    }, [navegando])
}
export default useUnProtectedPage