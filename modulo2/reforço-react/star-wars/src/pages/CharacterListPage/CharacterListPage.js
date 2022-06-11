import react from "react";
import { BASE_URL } from "../../constants/Url";
import axios from "axios";

import { CardList, Borda } from "./Styled";

class CharacterListPage extends react.Component {
    
  state = {
    list: []
  };

  componentDidMount() {
    this.getCharacterList();
   
  }

  getCharacterList = () => {
    axios
      .get(`${BASE_URL}/people`)
      .then(res => {
        alert("Sucesso");
        this.setState({list: res.data.results})
        console.log(this.state.list)
      })
      .catch(err => {
        alert("error");
        console.log(err.response);
      });
  };
  render() {
      const rederizandoLista = this.state.list.map((item)=>{
          return (
          <Borda>
          <CardList key={item.url}
          onClick={()=> this.props.goWindowCharacterDetailPage(item.url)}
          >
            
            {item.name}
          </CardList>
          </Borda>
          )
         
      })
    return (
     <div>
        {rederizandoLista}
       
        </div>
     
    );
  }
}

export default CharacterListPage;
