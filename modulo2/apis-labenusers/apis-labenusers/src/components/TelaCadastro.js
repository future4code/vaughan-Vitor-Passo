import react from "react";
import axios from "axios";
import styled from "styled-components";



class telaCadastro extends react.Component{

    state = {
        inputNome: "",
        inputEmail: ""
    }

    onChangeNome = (event) =>{
        this.setState({inputNome: event.target.value})
      }
    
    
      onChangeEmail = (event) =>{
        this.setState({inputEmail: event.target.value})
      }

     

     

      createUser = () =>{
        const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
          const body = {
            "email": this.state.inputEmail,
            "name": this.state.inputNome
    
          }
          const axiosConfig = {headers:{Authorization:"vitor-passo-vaughan"}}
    
          axios.post(url, body, axiosConfig)
          .then((response)=>{
            alert("Usuário Cadastrado Com Sucesso!")
            this.setState({inputNome: ""})
            this.setState({inputEmail: ""})
            // this.getAllUsers()
          })
          .catch((error)=>{
            alert(error.response.data.message)
    
          })
    
    
    
      }

    render(){
    return(
        <div>
            <button onClick={this.props.gotelaListaUsers}>Trocar tela</button>
            <h2>Cadastrado</h2>
         <input
             placeholder="Nome"
            value={this.state.inputNome}
            onChange={this.onChangeNome}
        />
        <input
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}
        />
        <button onClick={this.createUser}>Cadastrar</button>
        
        </div>
)
    }
}

export default telaCadastro
