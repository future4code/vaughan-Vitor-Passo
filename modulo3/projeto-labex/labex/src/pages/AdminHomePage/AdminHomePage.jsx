import { useNavigate  } from "react-router-dom"
import { BASE_URL } from "../../constant/Url"
import { useEffect, useState } from "react"
import { CardContainer } from "./styled"
import axios from "axios"
import CardTrips from "../../components/CardTrips/CardTrips"
const AdminHomePage = (props) =>{
    
    const [listandoNome, setNome] = useState([]) 
    const token = window.localStorage.getItem("token")
    useEffect(()=>{
        pegandoListTrips()
    }, [listandoNome])

    const navegando = useNavigate()
    

    const detalhes = (id) =>{
        navegando(`${id}`)
    }

    const pegandoListTrips = () =>{
        axios.get(`${BASE_URL}/trips`)
        .then((response)=>{
            
            setNome(response.data.trips);
        })
        .catch((error)=>{
            console.log(error.response);
        })
    }   
    const axiosConfig = {
        headers: {auth: token}
    }
    const excluindoViagem = (id) =>{
        axios.delete(`${BASE_URL}/trips/${id}`, axiosConfig)
        .then(()=> alert("Excluiu com sucesso"))
        .catch(()=> alert("Erro ao excluí viagem"))
    }

    const rederizandoNome = listandoNome.map((nome)=>{
        return(
            <CardContainer  key={nome.id}>
               <p onClick={() => detalhes(nome.id)}>{nome.name}</p> 
              
               <button onClick={() => excluindoViagem(nome.id)}>Excluir</button>
            </CardContainer>
        )
    })

    return (
        <div>
            
            <CardTrips
            lista={rederizandoNome}
            />
            
            
        </div>
    )
}
export default AdminHomePage
