import { BASE_URL } from "../../constant/url"
import axios from "axios"
import { useEffect } from "react"
import { TelaMatch } from "./styled"
const PaginaMatch = (props) =>{

    const getMatches = () =>{
        axios.get(`${BASE_URL}/matches`).then((response)=>{
            console.log(response.data)
            console.log("pegando matches")
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    useEffect(()=>{
        getMatches()
    }, [])

    return (
        <TelaMatch>
        <h1>
            Aqui é a pagina Match
            {console.log("mudou")}
        </h1>
        </TelaMatch>
    )
}

export default PaginaMatch