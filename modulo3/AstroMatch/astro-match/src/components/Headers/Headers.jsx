import { Cabecalho, Logo, Butao} from "./styled"
import logo from "../../pages/Pagina Inicial/imagem/logo.png"
import home from "../../pages/Pagina Inicial/imagem/home.png"
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const Headers = (props) =>{
 
    return(
        
        <Cabecalho>
        <Butao onClick={props.telaInicial}>
            <HomeIcon color= "primary" 
            sx={{ fontSize: 35 }}
            src={home} alt={"home"}/> 
            </Butao>
            <Logo src={logo} alt={"logo"}/>
            <Butao onClick={props.telaMatch}>
                <PeopleAltIcon
                color= "primary" 
                sx={{ fontSize: 35 }}
                src={home} alt={"home"}/>
               
                </Butao>
        </Cabecalho>
        
    )
}
export default Headers