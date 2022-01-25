import react from "react";
import axios from "axios";

class App extends react.Component {

  state = {
    listaUsuarios: [],
    inputNome: "",
    inputEmail: "",
    mudandoTela: false

  }

  mudandoTela = () =>{
    this.setState({mudandoTela: true})
  }

  componentDidMount = () =>{
    this.getAllUsers()
  }

  onChangeNome = (event) =>{
    this.setState({inputNome: event.target.value})
  }


  onChangeEmail = (event) =>{
    this.setState({inputEmail: event.target.value})
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

      console.log(error.resq)

    })

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
        this.getAllUsers()
      })
      .catch((error)=>{
        alert(error.response.data.message)

      })



  }

  render(){
    const showUser = this.state.listaUsuarios.map((user)=>{
      if(this.state.mudandoTela === true){
        return <p>{user.name}</p> 
      }
    
    })
    return (
      <div>

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
        <p></p>
        <button onClick={this.mudandoTela}>Trocar tela</button>

       


      </div>
    );

  }

}

export default App;
