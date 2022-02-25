import React from "react"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import AddRecipeForm from "./AddRecipeForm"
import { ScreenContainer } from "./styled"
 
const AddRecipesPage = ({setRightButtonAction}) =>{
    useUnProtectedPage()
    return(
        <ScreenContainer>
            <AddRecipeForm></AddRecipeForm>
        </ScreenContainer>
    )
}
export default AddRecipesPage