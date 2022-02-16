import { useNavigate } from "react-router-dom"
const ErroPage = () =>{
    const navegando = useNavigate()
    const voltar = () => {
        navegando(-2)
      }
    return(
        <div>
            <h1>Erro 404</h1>
            <button onClick={voltar}>Voltar</button>
        </div>
    )
}
export default ErroPage