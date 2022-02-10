import styled from "styled-components";
import Main from "./components/Main/Main";

const Background = styled.div`
  width: 100vw;
  height: 625px;
  background-color: grey;
`;

function App() {
  return (
    <Background>
      
        <Main />
        <button>Limpar match</button>
      
    </Background>
  );
}

export default App;
