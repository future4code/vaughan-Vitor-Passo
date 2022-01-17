import React from "react";
import "./App.css";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Agradecimentos";
 class App extends React.Component {
  state = {
    etapa: 1
  };

  mudandoEtapa2 = () => {
    this.setState ({ etapa: 2 })
  };
  mudandoEtapa3 = () => {
    this.setState ({
      etapa: 3
    });
  };
  mudandoEtapa4 = () => {
    this.setState ({
      etapa: 4
    });
  };

  render() {
    const renderizarEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 changing={this.mudandoEtapa2}  />;
        case 2:
          return <Etapa2 changing = {this.mudandoEtapa3} />;
          case 3:
            return <Etapa3 changing = {this.mudandoEtapa4} />
            case 4:
              return <Etapa4 changing = {this.mudandoEtapa4} />
        default:
          return <h1>Erro</h1>;
         
      }
    };
    return <div className="App">
      {renderizarEtapa()}
      </div>;
  }
}

export default App;