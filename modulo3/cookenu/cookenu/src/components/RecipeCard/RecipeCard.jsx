import { RecipeCardContainer, CardImg} from './styled'
const RecipeCard = ({title, img, onClick}) =>{
    
    return (
        <RecipeCardContainer onClick={onClick}>
        {title}
        <CardImg src={img}/>
        </RecipeCardContainer>
    )
}
export default RecipeCard