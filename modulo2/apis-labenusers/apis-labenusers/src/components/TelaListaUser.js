import react from "react";
import axios from "axios";
import styled from "styled-components";

const CardUser = styled.div`
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
const H2 = styled.h2`
   
    
    display: flex;
    align-items: center;
    justify-content: center;

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
        if (window.confirm("Tem certeza que deseja deletar?")) {
            axios.delete(url, axiosConfig)
        .then((res)=>{
            alert("Usuário(a) excluído com sucesso!")
            this.getAllUsers()

        })
        .catch((err)=>{
            console.log(err.response.data);
        })
        }
        
    }

    render(){
        const showUser = this.state.listaUsuarios.map((user)=>{
           
              return (
              <Borda>
              <CardUser key={user.id}>
                  {user.name}
                  <button onClick={() => this.deleteUser(user.id)}>X</button>
                  <button onClick={() => this.deleteUser(user.id)}>X</button>
                  </CardUser> 
                  </Borda>
        )
          })
        return (
        <div>

            <button onClick={this.props.gotelaCadastro}>Tela De Cadastro</button>
            <H2>Lista De Usuários</H2>
            {showUser}
        </div>
        )
    }
}

export default telaCadastro