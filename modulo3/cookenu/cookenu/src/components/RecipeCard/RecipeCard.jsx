import { RecipeCardContainer, CardImg} from './styled'
const RecipeCard = ({title, img, onClick}) =>{
    const clickDatil = () =>{
        console.log("alo")
    }
    return (
        <RecipeCardContainer onClick={clickDatil}>
        {title}
        <CardImg src={img}/>
        </RecipeCardContainer>
    )
}
export default RecipeCard