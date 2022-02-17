import { useNavigate, } from "react-router-dom"
import { BASE_URL } from "../../constant/Url"
import axios from "axios"
import { CardContainer, ViagemContainer } from "./styled"
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
        
            <p>Nome:{viagem.name}</p>
            <p>Descrição:{viagem.description}</p>
            <p>Planeta:{viagem.planet}</p>
            <p>Duração:{viagem.durationInDays}</p>
            <p>Data:{viagem.date}</p>
            
            </CardContainer>
        )
    })

    return(
        <div>
            <div>
            <button onClick={voltar}>voltar</button>
            <button onClick={telaInscricao}>Inscreva-se</button>
            <h1>Lista De Viagens</h1>
        </div>
        <ViagemContainer>
            
            {mapeandoLista}
        </ViagemContainer>
        </div>
    )
}
export default ListTripsPage