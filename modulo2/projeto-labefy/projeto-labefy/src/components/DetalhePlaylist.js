import react from "react";
import styled from "styled-components";
const Butao = styled.button`
    color: #FFF;
    background-color: green;
    border: none;
    border-radius: 30px;
    height: 40px;
    line-height: 20px;
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        background-color: darkgreen;
        
    }

`
class DetalhePlaylist extends react.Component{

  
getPlaylistTrack = () =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists//tracks`
    const auto ={
        headers: {
            Authorization: "vitor-passo-vaughan"
        }
    } 
       
}
  
    render(){
        return(
            <>
            <Butao onClick={this.props.jhordan}>Voltar</Butao>
             <p>Nome:</p>
             <p>Artista:</p>
            </>
        )
    }
}

export default DetalhePlaylist