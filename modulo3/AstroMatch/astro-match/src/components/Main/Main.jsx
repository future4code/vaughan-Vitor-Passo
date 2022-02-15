import { useState } from "react";
import PaginaIncial from "../../pages/Pagina Inicial/PaginaInicial";
import PaginaMatch from "../../pages/PaginaMatch/PaginaMatch";
import Headers from "../Headers/Headers";
import { MainContainer } from "./styled";

const Main = () => {
  const [trocaTela, setTrocaTela] = useState("inicial");

  const mudandoTela = () => {
    switch (trocaTela) {
      case "inicial":
        return <PaginaIncial />;

      case "match":
        return <PaginaMatch />;
      default:
        return <PaginaIncial />;
    }
  };

  const telaMatch = () => {
    setTrocaTela("match");
    console.log("alo match");
  };
  const telaInicial = () => {
    setTrocaTela("inicial");
    console.log("alo inicial");
  };
  return (
    <MainContainer>
      <Headers telaMatch={telaMatch} telaInicial={telaInicial} />

      {mudandoTela()}
      
    </MainContainer>
  );
};

export default Main;
