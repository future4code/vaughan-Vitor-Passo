import { useNavigate } from "react-router-dom"
import { CardTripsContainer,ContainerButton, Butao, H1 } from "./styled"
const CardTrips = (props) =>{
    const navegando = useNavigate()
    const voltar = () =>{
        navegando(-2)
    }
    return(
        <CardTripsContainer>
            <H1>Painel Administrativo</H1>
            <ContainerButton>
            <Butao onClick={voltar}>voltar</Butao>
            <Butao>Criar Viagem</Butao>
            <Butao>Logout</Butao>
            </ContainerButton>
           { props.lista}
        </CardTripsContainer>
    )
}

export default CardTrips