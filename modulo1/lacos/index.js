        //Exercicio de interpretação de código

// 1-Questão
// o valor mostrado no console será 10, isso acontece porque a variavel valor está sendo
// está sendo somando com o i que é o incremento do laço


//2-Questão
//a)Todos números maiores que 18! Que são esses respectivamente  19, 21, 23, 25, 27, 30

//b) O for já é o suficiente, mas há também outra forma. Usando o length para saber o tamanho do array.

//3-Questão
//Aqui basicamente o primeiro laço vai checar quantas vezes quer que o processo se repita
// e que irá decidir é o usuário, que no caso, foi 4. No segundo laço, vai pegar as linhas
// e irá somar com os asteríscos, que no caso irá ser 4 asterísticos.


        //Exercicio de escrita de código

//1-Questão

// let quantosBichos = Number(prompt("Digite quantos bichinhos você tem"))
// let listaBicho = []
// let nomesAnimais;

// if(quantosBichos === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }

// else if (quantosBichos > 0){

//     for (let contador = 0; contador < quantosBichos; contador++) {
//         nomesAnimais = prompt("Digite o nome do seu bichinho")
//         listaBicho.push(nomesAnimais)
//     }
// }
// console.log(listaBicho)



//2-Questão

//a)
 const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const imprimirArray = () =>{
//     console.log(arrayOriginal)
// }
// imprimirArray()

//b)

// const dividir = () =>{
//     for (let iterator of arrayOriginal) {
//         console.log(iterator/10)   
//     }
   
// }
// dividir()

//c)

// const arrayPares = () =>{
//    let novoArray = []
//    for (let iterator of arrayOriginal) {
//         if(iterator % 2 === 0){            
//             novoArray.push(iterator)         
//         }  
//     }
//     console.log(novoArray)
// }
// arrayPares()


//d)
const novoArrayPosicao = () =>{
    let novoArray = []
    for (let reodernando of arrayOriginal) {
        console.log(reodernando)
        
        novoArray.push(reodernando)
        
    }
}
novoArrayPosicao()