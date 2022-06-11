import axios from "axios";
import react from "react";
class CharacterDetailPage extends react.Component {

    state = {
        character: {},
        planet: ""
    }

    componentDidMount(){
        this.getCharater()
    }

    componentDidUpdate(){
        this.getPlanet()
    }

    getCharater = () =>{
        axios.get(this.props.url)
        .then((res)=>{
            this.setState({character: res.data})
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    getPlanet = () =>{
        axios.get(this.state.character.homeworld)
        .then((res) => this.setState({planet: res.data.name}))
        .catch((err) => console.log(err.response))
    }

  render() {
      
    return (
      <div>
        {/* <h1>{this.props.url}</h1> */}
       
        {this.state.character.name && this.state.planet ?
        (
            <div>
                <p>Nome:{this.state.character.name}</p>
            <p>Planeta: {this.state.planet}</p>
            </div>
         ): <p>Carregando...</p>
        
         
        }
        <button onClick={this.props.goWindowCharacterListPage}>Voltar</button>
      </div>
     
    );
   
  }
}

export default CharacterDetailPage;
