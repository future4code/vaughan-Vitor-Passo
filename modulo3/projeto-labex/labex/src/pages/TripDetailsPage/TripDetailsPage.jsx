import { useParams  } from "react-router-dom"
import { BASE_URL } from "../../constant/Url"
import { useEffect, useState } from "react"
import axios from "axios"
import CardDatail from "../../components/CardDatail/CardDatail"
const TripDetailsPage = () =>{
    const params = useParams()
    const token = window.localStorage.getItem("token")
    const [viagem, setViagem] = useState({})
    const axiosConfig = {
        headers:{auth: token}
    }
    
    useEffect(()=>{
        detalhesViagem()
    }, [])

    const detalhesViagem = () =>{
        axios.get(`${BASE_URL}/trip/${params.id}`, axiosConfig)
        .then((response)=>{
            setViagem(response.data.trip)
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    return (
        <div>
            <CardDatail
            aprovacao={viagem?.approved}
            candidatos={viagem?.candidates}
            descricao={viagem?.description}
            duracao={viagem?.durationInDays}
            id={viagem?.id}
            nome={viagem?.name}
            planeta={viagem?.planet}
            data={viagem?.date}
            />
        </div>
    )
}
export default TripDetailsPage
