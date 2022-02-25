import React from "react";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDatailPage from "../pages/RecipeDatailPage/RecipeDatailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import { Route, Routes } from "react-router-dom"

const Router = ({setRightButtonAction}) => {
    return <Routes>
        <Route path="/" element={<RecipesListPage />} />
        <Route exact path="login" element={<LoginPage
         setRightButtonAction={setRightButtonAction} />} />
        <Route exact path="cadastro" element={<SignUpPage 
        setRightButtonAction={setRightButtonAction} />} />
        <Route exact path="/detalhe/:id" element={<RecipeDatailPage />} />
        <Route path="adicionar-receita" element={<AddRecipesPage 
        setRightButtonAction={setRightButtonAction} />} />
    </Routes>;
}
export default Router