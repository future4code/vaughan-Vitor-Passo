import useProtectedPage from "../../hooks/useProtectedPage"
import {BASE_URL} from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import {RecipeContainer} from "./styled"
const RecipesListPage = () =>{
    useProtectedPage()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    
    const renderizandoRecipes = recipes.map((recipe, index) =>{
        if (index < 15) {
            return(
                <RecipeCard 
                key={recipe.id}
                title={recipe?.title}
                img={recipe?.image}
                onClick={() => null}
                />
            )
        }
    })
    console.log(renderizandoRecipes)
    return(
            <RecipeContainer>{renderizandoRecipes}</RecipeContainer>  
    )
}
export default RecipesListPage