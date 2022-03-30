//1)
//a) O tipo number não pode ser atribuído ao tipo string
    // const minhaString: string = 15

//b) Para que uma variável tenha mais de um tipo temos que colocar o operador "|"
    // const meuNumero: number | string = "eita"
    // const myNumber: number | string = 155
    // console.log(meuNumero, myNumber)

//c)
enum Cores {
    Vermelho = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul-escuro",
    VIOLETA = "violeta"
}
type Pessoa = {
    nome: string,
    corFavorita: Cores,
    idade: number
}

const person : Pessoa = {
    nome: "Vitor",
    corFavorita: Cores.Vermelho,
    idade: 18
}

const person2 : Pessoa = {
    nome: "Flavio",
    corFavorita: Cores.VERDE,
    idade: 20
}
const person3 : Pessoa = {
    nome: "Iza",
    corFavorita: Cores.AZUL,
    idade: 19
}
console.log(person)
console.log(person2)
console.log(person3)