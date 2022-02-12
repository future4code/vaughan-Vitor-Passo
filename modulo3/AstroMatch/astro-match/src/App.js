import styled from "styled-components";
import Main from "./components/Main/Main";
import axios from "axios";
import { BASE_URL } from "./constant/url";
const Background = styled.div`
  width: 100vw;
  height: 625px;
  background-color: grey;

`;


function App() {
  const limpandoMet = () =>{
    axios.put(`${BASE_URL}/clear`)
    .then((response)=>{
      console.log("limpou")
      alert("Limpou matches")
    })
    .catch((error)=>{
      console.log(error.response)
      alert("Erro ao limpar matches")
    })
    
  }
  
  return (
    <Background>
      
        <Main />
        <button onClick={() => limpandoMet()}>Limpar match</button>
      
    </Background>
  );
}

export default App;
