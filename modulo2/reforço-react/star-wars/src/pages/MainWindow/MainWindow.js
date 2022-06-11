import react from "react";
// import { BASE_URL } from "../../constants/Url";
// import axios from "axios";
class MainWindow extends react.Component {
    
  render() {
    return (
      <div>
        <button onClick={this.props.goWindowCharacterListPage}>Lista</button>
      </div>
    );
  }
}
export default MainWindow;
