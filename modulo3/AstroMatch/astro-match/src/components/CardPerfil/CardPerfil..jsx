import { Card} from "./styled"

const CardPerfil = ({img, name, bio, age, id}) =>{
    
    return(
        <Card key={id}>

          <img src={img} alt={"fotos de perfil dos usuários"}/>
          <div>
              <h2>{name}, {age}</h2>
              <p>{bio}</p>
          </div>
          
         
        </Card>
    )
}

export default CardPerfil