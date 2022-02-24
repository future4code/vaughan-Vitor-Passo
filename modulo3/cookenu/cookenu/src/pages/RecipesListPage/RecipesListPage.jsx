import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import { RecipeContainer, CardAddContainer } from "./styled"
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { goToAddRecipes } from "../../routes/coordinate"
import { useNavigate } from "react-router-dom"

const RecipesListPage = () => {
    useProtectedPage()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    const navigate = useNavigate()
    const clickDatil = () =>{
        console.log("alo")
    }
    const renderizandoRecipes = recipes.map((recipe, index) => {
        if (index < 15) {
            return (
                <RecipeCard
                    key={recipe.id}
                    title={recipe?.title}
                    img={recipe?.image}
                    onClick={clickDatil}
                />
            )
        }
    })
    console.log(renderizandoRecipes)
    return (
        <>
            <CardAddContainer onClick={() => goToAddRecipes(navigate)} color="primary" aria-label="add">
                <AddIcon />
            </CardAddContainer>
            <RecipeContainer>
                {renderizandoRecipes}
            </RecipeContainer>
        </>
    )
}
export default RecipesListPage