import { useParams  } from "react-router-dom"
import { BASE_URL } from "../../constant/Url"
import { useEffect, useState } from "react"
import axios from "axios"
import CardDatail from "../../components/CardDatail/CardDatail"
const TripDetailsPage = () =>{
    const params = useParams()
    const [listaDeCandidato, setlistaDeCandidato] = useState([])
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
                alert("Candidato Aprovador")
            })
            .catch(()=> alert("Candidato Reprovado"))
        }
        else{
            const body ={
                approve:false
            } 
            axios.put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`, body, axiosConfig)
            .then((response)=>{
                console.log(response.data)
                alert("Canditado Reprovado")
            })
            .catch(()=> alert("Canditado Reprovado"))
        
        }
       
    }
   
    
    const detalhesViagem = () =>{
        axios.get(`${BASE_URL}/trip/${params.id}`, axiosConfig)
        .then((response)=>{
            
            setViagem(response.data.trip)
            setlistaDeCandidato(response.data.trip.candidates)
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
            <button onClick={() => decideCandidata(cand.id, true)} >Aprovar</button>
            <button onClick={() => decideCandidata(cand.id, false)} >Reprovar</button>
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
            />
        </div>
    )
}
export default TripDetailsPage
