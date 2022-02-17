import { useNavigate, useParams  } from "react-router-dom"
import { BASE_URL } from "../../constant/Url"
import { useEffect, useState } from "react"
import axios from "axios"
const TripDetailsPage = () =>{
    const params = useParams()
    const token = window.localStorage.getItem("token")
    const axiosConfig = {
        headers:{auth: token}
    }
    
    useEffect(()=>{
        detalhesViagem()
    }, [])

    const detalhesViagem = () =>{
        axios.get(`${BASE_URL}/trip/${params.id}`, axiosConfig)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    return (
        <div>
            <h1>Aqui é o Detalhe das viagens sla</h1>
        </div>
    )
}
export default TripDetailsPage
