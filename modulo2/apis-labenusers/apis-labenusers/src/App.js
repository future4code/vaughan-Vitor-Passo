import react from "react";

import TelaListaUser from "./components/TelaListaUser";
import TelaCadastro from "./components/TelaCadastro";

class App extends react.Component {

  state = {
    mudandoTela: "cadastro"

  }

  mudandoJanela = () =>{
    switch (this.state.mudandoTela) {
      case "cadastro":
        return <TelaCadastro gotelaListaUsers={this.gotelaListaUsers}/>
      case "lista":
      return <TelaListaUser gotelaCadastro={this.gotelaCadastro} />
      
      default: 
      return <h2>Erro! Página não encontrada!</h2>
       
    }
  }


  gotelaCadastro = () =>{
    this.setState({mudandoTela: "cadastro"})
  }

  gotelaListaUsers = () =>{
    this.setState({mudandoTela: "lista"})
  }


  render(){
   
    return (
      <div>

       
       {this.mudandoJanela()}
        

      </div>
    );

  }

}

export default App;
