import { useParams  } from "react-router-dom"
import { BASE_URL } from "../../constant/Url"
import { useEffect, useState } from "react"
import axios from "axios"
import {CardButton, Butao} from "./styled"
import CardDatail from "../../components/CardDatail/CardDatail"
const TripDetailsPage = () =>{
    const params = useParams()
    const [listaDeCandidato, setlistaDeCandidato] = useState([])
    const [listaDeAprovado, setListaDeAprovado] = useState([])
    const token = window.localStorage.getItem("token")
    const [viagem, setViagem] = useState({})
  
    const axiosConfig = {
        headers:{auth: token}
    }
    
    useEffect(()=>{
        detalhesViagem();
    },[])

    const decideCandidata = (id, condico) =>{
        if(condico){
            const body ={
                approve:true
            } 
            axios.put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`, body, axiosConfig)
            .then((response)=>{
                console.log(response.data)
                
                alert("Candidato Aprovado")
                

            })
            .catch((error)=>{
                console.log(error.response)
                detalhesViagem()
            })
        }
        else{
            const body ={
                approve:false
            } 
            axios.put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`, body, axiosConfig)
            .then((response)=>{
                console.log(response.data)
                alert("Canditado Reprovado")
                detalhesViagem()
            })
            .catch(()=> alert("Canditado Reprovado"))
        
        }
       
    }
    console.log("Ellen minha vida: " , listaDeAprovado)
    const detalhesViagem = () =>{
        axios.get(`${BASE_URL}/trip/${params.id}`, axiosConfig)
        .then((response)=>{
            
            setViagem(response.data.trip)
            setlistaDeCandidato(response.data.trip.candidates)
            setListaDeAprovado(response.data.trip.approved)
            console.log(response.data)
            // setCandidatoId(response.data.candidates.id)
                      
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    const renderizandoLista = listaDeCandidato.map((cand)=>{  
        return(
            <div key={cand.id}>
            <p>Nome: {cand.name}</p>
            <p>Profissão: {cand.profession}</p>
            <p>Idade: {cand.age}</p>
            <p>País: {cand.country}</p>
            <p>Texto de Candidatura: {cand.applicationText}</p>
            <CardButton>
            <Butao onClick={() => decideCandidata(cand.id, true)} >Aprovar</Butao>
            <Butao onClick={() => decideCandidata(cand.id, false)} >Reprovar</Butao>
            </CardButton>
            </div>
        )
    })

    const renderizandoListaDeAprovados = listaDeAprovado.map((aprovacao)=>{
        return(
            <div key={aprovacao.id}>
                <li>{aprovacao.name}</li>
            </div>
        )
    })
    
    return (
        <div>
            <CardDatail
            
            descricao={viagem?.description}
            duracao={viagem?.durationInDays}
            id={viagem?.id}
            nome={viagem?.name}
            planeta={viagem?.planet}
            data={viagem?.date}
            listaDeCandidato={renderizandoLista}
            nomeAprovado={renderizandoListaDeAprovados}
            />
        </div>
    )
}
export default TripDetailsPage
