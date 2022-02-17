import { useNavigate } from "react-router-dom"
import { CardContainer } from "./styled"
const CardDatail = (
    {
    aprovacao, canditados, data, descricao,
    duracao, id, nome, planeta
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
        </CardContainer>
    )
}
export default CardDatail