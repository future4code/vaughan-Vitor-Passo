import { Cabecalho} from "./styled"
const Headers = (props) =>{
 
    return(
        
        <Cabecalho>
        <button onClick={props.telaInicial}>Home</button>
            <p>Logo</p>
            <button onClick={props.telaMatch}>Match</button>
        </Cabecalho>
        
    )
}
export default Headers