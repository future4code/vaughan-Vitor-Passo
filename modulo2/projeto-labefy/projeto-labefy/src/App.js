import react from "react";
import WindowPlaylist from "./components/WindowPlaylist";

import WindowAddPlaylist from "./components/WindowAddPlayList";
import DetalhePlaylist from "./components/DetalhePlaylist";




// const H2 = styled.h2`
  
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `



class App extends react.Component {

 state = {
   tela: "principal"
  
   
 }

 changeWindow = () =>{
   switch (this.state.tela) {
     case "principal":
       return <WindowAddPlaylist telaPlayList={this.telaPlayList}  />
     case "playlist":
      return <WindowPlaylist telaPrincial={this.telaPrincial} telaDetalhe={this.telaDetalhe}  />
      case "detalhes":
      return <DetalhePlaylist jhordan = {this.telaPlayList}/>
   
     default:
       return <h2>Erro! Página não encontrada!</h2>
      
   }
 }


 telaPrincial = () =>{
  this.setState({tela: "principal"})
 }
 telaPlayList = () =>{
  this.setState({tela: "playlist"})
 }
 telaDetalhe = () =>{
  this.setState({tela: "detalhes"})
 }


  render(){
    
    return (
      
      <div >
        {this.changeWindow()}
         
     
      </div>
    );
  }

  
}

export default App;
