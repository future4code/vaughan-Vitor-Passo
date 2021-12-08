        //exercicio de interpretação de código
//1-Questão
// I- Irá mostrar o primero elemento do array que é: 'Matheus Nachtergaele',
// II- Irá mostrar o ultimo elemento do array que é a 'Virginia Cavendish',
// III- Irá mostra o elemento na posição 2 que é o {canal: "Globo", horario: "14h"}



//2-Questão
//a) Irá mostrar todas as propriedades do meu objeto que no caso são:
    //{nome: "Juca", idade: 3, raca: "SRD"} => primeiro console
    //{nome: "Juba", idade: 3, raca: "SRD"} => segundo console
    //{nome: "Jubo"} => terceiro console

//b) Os três pontos significa que está espelhando/spread toda as propripedades de um
// determinado objeto. E caso for feita uma possível alteração será nessa nova cópia.



//3-Questão
//a) Irá aparecer false e undefined
//b) Isso acontece porque "altura" não é uma propriedade, logo resultára com undefined.


        //Exercicio de escrita de código

//1-Questão
//a)
// const person = {
//     nome: "Vitor",
//     apelido: ["vitin gordin", "vitin", "vitinho"]
// }
// //
// const myData = () =>{ 
//     const frase = `Eu sou ${person.nome}, mas pode me chamar de: ${person.apelido}`
//     return frase
// }
// console.log(myData(person))



//b)
// const person = {
//     nome: "Vitor",
//     apelido: ["vitin gordin", "vitin", "vitinho"]
// }
// const newPerson = {
//     ...person,
//     apelido: ["Lindo", " King Of The Girls", " giggles"]
// }
// //
// const myData = () =>{ 
//     const frase = `Eu sou ${newPerson.nome}, mas pode me chamar de: ${newPerson.apelido}`
//    return frase
// }
// console.log(myData(newPerson))



//2-Questão
// const data = { // criando um objeto
//     nome: "Vitor",
//     idade: 18,
//     profissao: "Estudante",
//     myData: () =>{
//         return [data.nome, data.nome.length, data.idade, data.profissao, data.profissao.length]
//     }
    
// }
// const newData = { // criando outro objeto
//     nome: "Cleiton",
//     idade: 18,
//     profissao: "Estudante",
//     myFunction: () => {
        
//         return [newData.nome, newData.nome.length, newData.idade, newData.profissao, newData.profissao.length] 
//         //retornando minhas propriedas 
//     }
// }
// console.log(data.myData()) //objeto1
// console.log(newData.myFunction()) //objeto2


//3-Questão

// const carrinho = [];
// const fruta1 = {
//     nome: "Banana",
//     disponivel: false
// }
// const fruta2 = {
//     nome: "Laranja",
//     disponivel: true
// }
// const fruta3 = {
//     nome: "Abacaxi",
//     disponivel: true
// }

// const addFruta = (fruta) =>{
//     fruta = carrinho.push(fruta1, fruta2, fruta3)
//     return fruta
// }

// carrinho.push(addFruta())
// console.log(carrinho)



        //Desafio
//1-Questão
//  const dadosPessoa = (nome, idade, profissao) =>{
//  	 nome = prompt("Digite seu nome");
//      idade = prompt("Digite sua idade");
//      profissao = prompt("Digite sua profissão");

//      const pessoa = {
//         nome,
//         idade,
//         profissao
//      }
     
//      console.log(pessoa)
//      console.log(typeof pessoa)
//      return pessoa
//  }
//  dadosPessoa()
 