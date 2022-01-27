import react from "react";
import axios from "axios";
import styled from "styled-components";
const CardPlayList = styled.div`
 border: 1px black solid;
    padding: 10px;
    margin: 10px;
    width: 18rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Borda = styled.div`
   
    
    display: flex;
    align-items: center;
    justify-content: center;
`

class WindowPlaylist extends react.Component {

    state = {
        playlist: []
    }

    componentDidMount = () => {
        this.getPlaylist()
    }
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
    render() {
        const listaPlaylist = this.state.playlist.map((music)=>{
            return (
                <Borda>
              <CardPlayList key={music.id}>
                
                {music.name}
                <button onClick={this.delete}>X</button>
              </CardPlayList>
              </Borda>
            )
          })
        return ( 
            <div>
                <button onClick={this.props.telaPrincial}>Voltar</button>
             {listaPlaylist}
            
            </div>
          
        )
    }
}

export default WindowPlaylist