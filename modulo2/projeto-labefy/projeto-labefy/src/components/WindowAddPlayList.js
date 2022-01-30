import react from "react";
import axios from "axios";
import styled from "styled-components";


const Borda = styled.div`
  border: 1px black solid;
  position: relative;
  width: 600px;
  margin-left: 400px;
    top: 50px;
   
  display: flex;
  flex-direction: column;

  gap: 8rem;
  align-items: center;
  justify-content: center;
 
`

const Butao = styled.button`
    color: #FFF;
    background-color: green;
    border: none;
    border-radius: 30px;
    height: 60px;
    line-height: 30px;
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        background-color: darkgreen;
        
    }

`

const Input = styled.input`

    align-items: center;
    width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
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
            
          
                 <Borda>
               
                <Butao onClick={this.props.telaPlayList}> Minhas PlayList</Butao>
           
               
            <Input
         placeholder="Adiciona Playlist" 
         value={this.state.inputValue}
         onChange={this.pegandoPlaylist} />

         <Butao onClick={this.cretePlaylist} >Criar Playlist</Butao>
            </Borda>
          
           
        )

    }
}

export default WindowAddPlaylist