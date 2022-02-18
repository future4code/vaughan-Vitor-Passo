import { useNavigate } from "react-router-dom"
import { CardContainer } from "./styled"
const CardDatail = (
    {
    data, descricao,
    duracao, id, nome, planeta, listaDeCandidato
}) =>{
    const navegando = useNavigate()
    

    const voltar = () =>{
        navegando(-1)
    }

   
    return(
      
        <CardContainer key={id}>
            <h1>{nome}</h1>
            <p>Nome: {nome}</p>
            <p>Descrição: {descricao}</p>
            <p>Planeta: {planeta}</p>
            <p>Duração: {duracao}</p>   
            <p>Data: {data}</p>
            <button onClick={voltar}>Voltar</button>
            <p>{listaDeCandidato}</p>
        </CardContainer>

      

        
    )
}
export default CardDatail