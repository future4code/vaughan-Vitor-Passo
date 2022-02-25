import { useNavigate } from "react-router-dom"
import {ContainerHome, ContainerButton, Butao, H1} from "./styled"
const HomePage = () =>{
    const navegando = useNavigate()   
 
    const telaViagens = () => {
        navegando("viagem")

    }
   
    const telaLogin = () =>{
        navegando("login")
    }
 
    return(
        <ContainerHome>
        <H1>Labex</H1>
        <ContainerButton>
            
            
            <Butao onClick={telaViagens}>Ver Viagens</Butao>
            <Butao onClick={telaLogin}>Área de Admin</Butao>
        </ContainerButton>
        </ContainerHome>
    )
}
export default HomePage