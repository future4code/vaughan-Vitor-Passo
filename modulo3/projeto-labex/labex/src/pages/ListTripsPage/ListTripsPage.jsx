import { useNavigate, } from "react-router-dom"
import { BASE_URL } from "../../constant/Url"
import axios from "axios"
import { CardContainer, ViagemContainer, Butao, H1, ContainerButton, H2 } from "./styled"
import { useEffect, useState } from "react"
const ListTripsPage = () =>{
    const [listaViagem, listaSetViagem] = useState([])
    
    useEffect(()=>{
        pegarListaViagem()
    },[])

    const navegando = useNavigate()

    const telaInscricao = () => {
        navegando("Application")
    }
    const voltar = () => {
        navegando(-1)
      }
    
    const pegarListaViagem = () =>{
        axios.get(`${BASE_URL}/trips`)

        .then((response)=>{
            console.log(response.data.trips)
            listaSetViagem(response.data.trips)
        })

        .catch((error)=>{
            console.log(error.response)
            
        })
    }
    
    const mapeandoLista = listaViagem.map((viagem)=>{
        return(

            <CardContainer key={viagem.id}>
            <p> <H2> Nome: </H2> {viagem.name} </p>
            <p> <H2> Descrição: </H2> {viagem.description} </p>
            <p> <H2> Planeta: </H2> {viagem.planet} </p>
            <p> <H2> Duração: </H2> Duração: {viagem.durationInDays} </p>   
            <p> <H2> Data: </H2> {viagem.date} </p>
            </CardContainer>
        )
    })

    return(
        <ViagemContainer>
            <ContainerButton>
            <Butao onClick={voltar}>voltar</Butao>
            <Butao onClick={telaInscricao}>Inscreva-se</Butao>
            
        </ContainerButton>
        <H1 >Lista De Viagens</H1>
        <ViagemContainer>
            {mapeandoLista}
        </ViagemContainer>
        </ViagemContainer>
    )
}
export default ListTripsPage