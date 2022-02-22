import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {goToLogin} from "../routes/coordinate"
const useProtectedPage = () =>{
    const navegando = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (!token) {
            goToLogin(navegando)
        }
    }, [navegando])
}
export default useProtectedPage