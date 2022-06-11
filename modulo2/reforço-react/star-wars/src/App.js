import react from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import MainWindow from "./pages/MainWindow/MainWindow";

class App extends react.Component {
  state = {
    window: "main",
    clickedCharacterUrl: ""
  };

  changeWindow = () => {
    switch (this.state.window) {
      case "main":
        return <MainWindow 
            
            goWindowCharacterListPage={this.goWindowCharacterListPage}/>;

      case "detail":
        return (
          <CharacterDetailPage
            goWindowCharacterDetailPage={this.goWindowCharacterDetailPage}
            goWindowCharacterListPage={this.goWindowCharacterListPage}
            url={this.state.clickedCharacterUrl}
          />
        );
      case "list":
        return (
          <CharacterListPage
            goWindowCharacterDetailPage={this.goWindowCharacterDetailPage}
           
            url={this.state.clickedCharacterUrl}
            
          />
        );

      default:
        break;
    }
  };

  goWindowCharacterDetailPage = (url) => {
    this.setState({ window: "detail", clickedCharacterUrl: url });
  };

  goWindowCharacterListPage = () => {
    this.setState({ window: "list", clickedCharacterUrl:""});
  };


  render() {
    return (
      <div>
        
        {this.changeWindow()}
      </div>
    );
  }
}

export default App;
