import React from "react";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDatailPage from "../pages/RecipeDatailPage/RecipeDatailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Headers from "../components/Headers/Headers";
const Router = () =>{   
    return(
        <BrowserRouter>
            <Headers/>
            <Routes>
                <Route path="/" element={<RecipesListPage/>}/>
                <Route path="login" element={<LoginPage/>} />
                <Route path="cadastro" element={<SignUpPage/>} />
                <Route path="detalhe" element={<RecipeDatailPage />} />
                <Route path="adicionar-receita" element={<AddRecipesPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router