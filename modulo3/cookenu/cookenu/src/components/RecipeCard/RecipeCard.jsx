import { RecipeCardContainer} from './styled'
const RecipeCard = ({title, img, onClick}) =>{
    return (
        <RecipeCardContainer>
        {title}
        </RecipeCardContainer>
    )
}
export default RecipeCard