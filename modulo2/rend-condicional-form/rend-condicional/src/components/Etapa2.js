import React from "react";

export default class Etapa2 extends React.Component {
  state = 
    {
      curso: "",
      universidade: ""
    }

    

  render() {

    return <>
     <h1>Etapa2 - Informações Ensino Superior</h1>
        <p>5. Qual o seu curso?</p>
        <input value={this.nome} onChange={this.onChangeNome} />
        <p>6. Qual a sua idade?</p>
        <input value={this.idade} onChange={this.onChangeIdade} />
        <p></p>
        <button onClick={this.props.changing}>Próxima Etapa</button>
    </>;
  }
}
