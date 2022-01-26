import react from "react";
import axios from "axios";
import styled from "styled-components";

const CardUser = styled.div`
    border: 1px black solid;
    padding: 10px;
    margin: 10px;
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


`

class telaCadastro extends react.Component{

    state = {
        listaUsuarios: []
    }

    componentDidMount = () =>{
        this.getAllUsers()
        
    }

    getAllUsers = () => {
        const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const axiosConfig = {headers:{Authorization: "vitor-passo-vaughan"}}
    
        axios.get(url, axiosConfig)
        .then((resq)=>{
    
          this.setState({listaUsuarios: resq.data})
          console.log(resq.data)
    
    
        })
        .catch((error )=>{
    
          alert(error.resq.message)
    
        })
    
      }

      deleteUser = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const axiosConfig = {headers:
            {
            Authorization: "vitor-passo-vaughan"
        }}
        axios.delete(url, axiosConfig)
        .then((res)=>{
            alert("Usuário(a) excluído com sucesso!")
            this.getAllUsers()

        })
        .catch((err)=>{
            console.log(err.response.data);
        })
    }

    render(){
        const showUser = this.state.listaUsuarios.map((user)=>{
           
              return <CardUser key={user.id}>
                  {user.name}
                  <button onClick={() => this.deleteUser(user.id)}>X</button>
                  </CardUser> 
        
          
          })
        return (
        <div>

            <button onClick={this.props.gotelaCadastro}>Tela De Cadastro</button>
            <h2>Lista De Usuários</h2>
            {showUser}
        </div>
        )
    }
}

export default telaCadastro