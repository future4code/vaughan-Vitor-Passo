import { useNavigate  } from "react-router-dom"
import { BASE_URL } from "../../constant/Url"
import { useEffect, useState } from "react"
import { CardContainer } from "./styled"
import axios from "axios"
const AdminHomePage = (props) =>{
    
    const [listandoNome, setNome] = useState([]) 

    useEffect(()=>{
        pegandoListTrips()
    })

   
    const navegando = useNavigate()
    const voltar = () =>{
        navegando(-1)
    }

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

    const rederizandoNome = listandoNome.map((nome)=>{
        return(
            <CardContainer onClick={() => detalhes(nome.id)} key={nome.id}>
               <p>{nome.name}</p> 
              
               <button>Excluir</button>
            </CardContainer>
        )
    })

    return (
        <div>
            <h1>Aqui é a pagina Admin home, socorro!</h1>
            {rederizandoNome}
            <button onClick={voltar}>voltar</button>
        </div>
    )
}
export default AdminHomePage
