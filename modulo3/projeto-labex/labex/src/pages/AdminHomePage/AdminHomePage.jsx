import { useNavigate } from "react-router-dom"
const AdminHomePage = (props) =>{
    const navegando = useNavigate()
    const voltar = () =>{
        navegando(-1)
    }
    return (
        <div>
            <h1>Aqui é a pagina Admin home, socorro!</h1>
            <button onClick={voltar}>voltar</button>
        </div>
    )
}
export default AdminHomePage
