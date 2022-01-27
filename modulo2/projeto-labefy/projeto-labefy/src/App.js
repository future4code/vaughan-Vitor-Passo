import react from "react";
import WindowPlaylist from "./components/WindowPlaylist";

import WindowAddPlaylist from "./components/WindowAddPlayList";




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
       return <WindowAddPlaylist telaPlayList={this.telaPlayList} />
     case "playlist":
      return <WindowPlaylist telaPrincial={this.telaPrincial} />
   
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


  render(){
    
    return (
      
      <div >
        {this.changeWindow()}
         
     
      </div>
    );
  }

  
}

export default App;
