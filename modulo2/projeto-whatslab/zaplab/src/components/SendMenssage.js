import React from "react";

class SendMenssage extends React.Component {
  state = {
    mensagem: [],
    inputUser: "",
    inputContent: ""
  };

  onChangeUser = (event) => {
    this.setState({ inputUser: event.target.value });
  };

  onChangeContent = (event) => {
    this.setState({ inputContent: event.target.value });
  };

  adicionarMensagem = () => {
    const novaMensagem = {
      user: this.state.inputUser,
      content: this.state.inputContent
    };

    const newMessage = [...this.state.mensagem, novaMensagem];
    this.setState({ mensagem: newMessage });
    this.setState({ inputContent: "" });
  };

  render() {
    const listaMensagem = this.state.mensagem.map((msg) => {
      return (
        <div>
          <p>
            {msg.user} : {msg.content}
          </p>
        </div>
      );
    });
    return (
      <div>
        <input
          value={this.state.inputUser}
          onChange={this.onChangeUser}
          placeholder="Usuário"
        />
        <input
          value={this.state.inputContent}
          onChange={this.onChangeContent}
          placeholder="Mensagem"
        />

        <button onClick={this.adicionarMensagem}>Enviar</button>
        <div>{listaMensagem}</div>
      </div>
    );
  }
}
export default SendMenssage;
