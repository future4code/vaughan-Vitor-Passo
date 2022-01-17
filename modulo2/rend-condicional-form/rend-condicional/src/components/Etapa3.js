import React from "react"


export default class Etapa3 extends React.Component{

    render(){
        return <>
        <h1>Etapa3 - Informações Gerais de ensino</h1>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input/>
        <p>6. Você fez algum curso complementar?</p>
        <select name="nivel-escolaridade">
          <option>Nenhum</option>
          <option>Curso Técnico</option>
          <option>Curso de inglês</option>
          </select>
          <p></p>
          <button onClick={this.props.changing}>Próxima Etapa</button>
          
        </>
    }

}