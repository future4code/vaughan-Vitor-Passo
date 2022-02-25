import { useNavigate } from "react-router-dom"
import { CardContainer, H2, CardInfo, CardCandidato, Butao, H1 } from "./styled"
const CardDatail = (
    {
    data, descricao,
    duracao, id, nome, planeta, listaDeCandidato,
    nomeAprovado
}) =>{
    const navegando = useNavigate()
    const voltar = () =>{
        navegando(-1)
    }

    return(
      
        <CardContainer key={id}>
            <H1>{nome}</H1>
            <CardInfo>
            <p><H2>Nome: </H2>{nome}</p>
            <p><H2>Descrição: </H2> {descricao}</p>
            <p><H2>Planeta: </H2>{planeta}</p>
            <p><H2>Duração: </H2> {duracao}</p>   
            <p><H2>Data: </H2>{data}</p>
            </CardInfo>
            <Butao onClick={voltar}>Voltar</Butao>
           <CardCandidato>
            <p>{listaDeCandidato}</p>
            </CardCandidato>
            <>
            <ul>{nomeAprovado}</ul>
            </>
        
        </CardContainer>
      
    )
}
export default CardDatail