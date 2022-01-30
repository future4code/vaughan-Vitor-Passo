import react from "react";
import axios from "axios";
import styled from "styled-components";
import DetalhePlaylist from "./DetalhePlaylist";
const CardPlayList = styled.div`
 border: 1px black solid;
    padding: 10px;
    margin: 10px;
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover{
        background-color: lightgrey;
    }
`
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
const Borda = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
`

const ButaoExclui = styled.button`
    border-radius: 20px;
    cursor: pointer;
    width: 45px;
    
    background-color: #ff7b5a;
    
    &:hover{
        background-color: red;
    }
`

class WindowPlaylist extends react.Component {

    state = {
      
        playlist: []
    }

   
    


    componentDidMount = () => {
        this.getPlaylist()
       
    }
    // componentDidUpdate = () =>{
       
    //     this.getPlaylist()
    // }
    getPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const axiosConfig = {
            headers: {
                Authorization: "vitor-passo-vaughan"
            }
        }
        axios.get(url, axiosConfig)
            .then((resp) => {
                this.setState({
                    playlist: resp.data.result.list
                })
                console.log(resp.data)
            })
            .catch((error) => {
                alert("Erro ao pegar PlayList")

            })
    }

    deletePlaylist = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        const auto ={
            headers: {
                Authorization: "vitor-passo-vaughan"
            }
        } 
        if(window.confirm("Deseja deletar PlayList?")) {
            axios.delete(url, auto)
            .then((response) => {
                alert("Playlist Excluída Com Sucesso")
                this.getPlaylist()
            })
            .catch((error) =>{
                alert("Erro ao excluí playlist")
                console.log(error.response.data)
            })
        }
     
    }


    render() {
        const listaPlaylist = this.state.playlist.map((music)=>{
            return (
                <Borda>
              <CardPlayList key={music.id} >
                  <button  onClick={this.props.telaDetalhe}> Detalhes</button>
             
                {music.name}
               
                <ButaoExclui onClick={() =>this.deletePlaylist(music.id)}>X</ButaoExclui>
              </CardPlayList>
              </Borda>
            )
          })
        return ( 
            <div>
                <Butao onClick={this.props.telaPrincial}>Voltar</Butao>
             {listaPlaylist}
           
            
            </div>
          
        )
    }
}

export default WindowPlaylist