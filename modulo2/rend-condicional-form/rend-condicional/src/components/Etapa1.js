import React from "react";
export default class Etapa1 extends React.Component {
  state = [
    {
      nome: "",
      idade: "",
      email: "",
     
    }
  ];

  onChangeNome = (event) => {
    this.setState = {
      nome: event.target.value
    };
  };
  onChangeIdade = (event) => {
    this.setState = {
      idade: event.target.value
    };
  };
  onChangeEmail = (event) => {
    this.setState = {
      email: event.target.value
    };
  };

  render() {
    return (
      <div className="App">
        <h1>Etapa1 - Dados Gerais</h1>
        <p>1. Qual o seu nome?</p>
        <input value={this.nome} onChange={this.onChangeNome} />
        <p>2. Qual a sua idade?</p>
        <input value={this.idade} onChange={this.onChangeIdade} />
        <p>3. Qual o seu email?</p>
        <input value={this.email} onChange={this.onChangeEmail} />
       
        <p>4. Qual a sua escolaridade?</p>
        <label for="escolaridade"></label>
        <select name="nivel-escolaridade">
          <option>Ensino médio incompleto</option>
          <option>Ensino médio completo</option>
          <option>Ensino superior incompleto</option>
          <option>Enino superior completo</option>
        </select>
        <p></p>
        <button onClick={this.props.changing}>Próxima Etapa</button>
      </div>
    );
  }
}
