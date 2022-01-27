import react from "react";
import axios from "axios";
import styled from "styled-components";

const Borda = styled.div`
  border: 1px black solid;

  display: flex;
  align-items: center;
  justify-content: center;
`
const Tela = styled.div`


display: flex;
align-items: center;
justify-content: center;

`
class WindowAddPlaylist extends react.Component {
    state = {
        inputValue: ""
    }
    pegandoPlaylist = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    cretePlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.inputValue
        }
        const axiosConfig = {
            headers: {
                Authorization: "vitor-passo-vaughan"
            }
        }
        axios.post(url, body, axiosConfig)
            .then((response) => {
                alert("PlayList Adicionado Com Sucesso")
                this.setState({
                    inputValue: ""
                })
                this.getPlaylist()


            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    render() {
        return(
            <Tela>
                <button onClick={this.props.telaPlayList}> Minhas PlayList</button>
            <Borda>
            <input
         placeholder="Adiciona Playlist" 
         value={this.state.inputValue}
         onChange={this.pegandoPlaylist} />

         <button onClick={this.cretePlaylist} >Criar Playlist</button>
            </Borda>
            </Tela>
        )

    }
}

export default WindowAddPlaylist