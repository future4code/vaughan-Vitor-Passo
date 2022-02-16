// import { Inscricao } from './styled'
// import { Input } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const ApplicationFormPage = (props) =>{
    const navegando = useNavigate();
    const voltar = () =>{
        navegando(-1)
    }

    return(
        <div>
            <h1>Aqui é o formulário de inscrever a viagem</h1>
            <input 
            placeholder={"nome"}
            type={"text"}
            />
             <input 
            placeholder={"idade"}
            type={"number"}
            />
             <input 
            placeholder={"texto de candidatura"}
            type={"text"}
            />
            <input 
            placeholder={"profissão"}
            type={"text"}
            />

            <button>cadastrar</button>
            <button onClick={voltar}>voltar</button>
            
        </div>
    )
}
export default ApplicationFormPage