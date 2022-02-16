import { useNavigate } from "react-router-dom"
const HomePage = () =>{
    const navegando = useNavigate()
    
  
    const telaViagens = () => {
        navegando("viagem")

    }
    const telaAdm = () => {
        navegando("adm")
    }

    
    
    return(
        <div>
            <h1>Labex</h1>
            <button onClick={telaViagens}>Ver Viagens</button>
            <button onClick={telaAdm}>Área de Admin</button>
        </div>
    )
}
export default HomePage