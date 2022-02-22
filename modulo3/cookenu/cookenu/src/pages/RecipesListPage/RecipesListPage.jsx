import axios from "axios"
import React, { useEffect } from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import {BASE_URL} from "../../constants/urls"
const RecipesListPage = () =>{
    
    useEffect(()=>{
        getRecipesList()
    }, [])
    const token = localStorage.getItem("token")
    const axiosConfing = {
        headers:{Authorization: token }
    }
    const getRecipesList = () =>{
        axios.get(`${BASE_URL}/recipe/feed`, axiosConfing)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    useProtectedPage()
    
    return(
        <div>
            <h1>RecipesListPage</h1>
        </div>
    )
}
export default RecipesListPage