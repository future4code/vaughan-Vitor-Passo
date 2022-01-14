import React from "react";

class SendMenssage extends React.Component {
  state = {
    inputUser: "",
    inputContent: ""
  };

  onChangeUser = (event) => {
    this.setState({ inputUser: event.target.value });
  };

  onChangeContent = (event) => {
    this.setState({ inputContent: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          value={this.setState.inputUser}
          onChange={this.onChangeUser}
          placeholder="Usuário"
        />
        <input
          value={this.setState.inputContent}
          onChange={this.onChangeContent}
          placeholder="Usuário"
        />

        <button>Enviar</button>
      </div>
    );
  }
}
export default SendMenssage;
