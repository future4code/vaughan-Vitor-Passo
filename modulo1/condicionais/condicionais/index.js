//exercicios de interpretação de código
//1-Questão
//a) O codigo começa pedindo um dado para o usuário por meio do prompt
//  logo em seguida tranforma para o tipo number e vai checar se esse número é par.

//b) Para todos os números pares.
//c)Para todos os números ímpares.

//2-Questão 
//a) basicamente serve para o usuário digitar um fruta e e mostrar o preço dela.
//b) O preço da fruta ",maçã, " é ", "R$ ", 2.25
//c) O preço da fruta ", pêra, " é ", "R$ ", 5.5 , 5 
//**Sem o break iria mostrar outro preço que no caso é o 5**

//3-Questão
//a) A primeira linha está pedindo um dado para o usuário por meio da função prompt e convertendo
// para o tipo Number.
//b) No primeiro caso a mensagem seria: "Essa mensagem é secreta!!!"
//b) No segundo caso a mensagem seria: "mensagem its not defined"
//c) O erro acontece porque o valor digitado não passa no bloco do if, isso acontece porque está
// checando apenas numero maior que zero. 



//exercicios de escrita de código
//1-Questão
// const idade = Number(prompt("Digite sua idade"));
// if(idade >= 18){
//     console.log("Você pode dirigir");
// }
// else{
//     console.log("Você não pode dirigir");
// }



//2-Questão
// const turno = prompt("Digite o turno").toUpperCase()
// if (turno === "M") {
//     console.log("Bom Dia");
// } else if (turno === "V") {
//     console.log("Boa Tarde");
// }
// else if (turno === "N") {
//     console.log("Boa Noite");
// }


//3-Questão

// const turno = prompt("Digite o seu turno").toUpperCase();
// switch (turno) {
//     case 'M':
//         console.log("Bom dia");
//         break;
//     case 'V':
//         console.log("Boa Tarde")
//         break;
//     case 'N' :
//         console.log("Boa Noite") 
//     default:
//         break;
// }



//4-Questão 

// const generoFilme = prompt("Digite o genero do filme").toLowerCase();
// const precoIngreco = Number(prompt("Digite o preço do ingreso"));

// if (generoFilme === "fantasia" && precoIngreco < 15) {
//     console.log("Bom filme!");

// }
// else{
//     console.log("Escolha outro filme :(");
// }

//DESAFIO

//1-Questão

// const generoFilme = prompt("Digite o genero do filme").toLowerCase();
// const precoIngreco = Number(prompt("Digite o preço do ingreso"));

// if (generoFilme === "fantasia" && precoIngreco < 15) {
//     let lanche = prompt("Digite o seu lanche").toLowerCase()
//     switch (lanche) {
//         case 'chocolate':
//             console.log(`Bom filme! Aproveite seu ${lanche}`);
//             break;
//         case 'doces':
//             console.log(`Bom filme! Aproveite seus ${lanche}`);
//             break;
//         case 'pipoca':
//             console.log(`Bom filme! Aproveite sua ${lanche}`);
//         default:
//             break;
//     }    
// }
// else {
//     console.log("Escolha outro filme :(");
// }


//usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade)
//Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
//2-Questão

/* AQUI COMEÇA O COMENTARIO DE TODO O DESAFIO DA SEGUNDA QUESTÃO


const nomeCompleto = prompt("Digite seu nome completo");
const tipoDoJogo = prompt("Digite o tipo do jogo").toLowerCase();
const etapaDoJogo = prompt("Digite a etapa do jogo").toLowerCase();
const categoria = prompt("Digite um categoria de 1 a 4");
const quantidaIngresso = Number(prompt("Digite a quantidade de ingresso"));
let valorTotal;
let ingresso;
   

//dividr dois if para cada tipo do jogo internacional ou nacional

if(tipoDoJogo === "internacional"){  //aqui eu to verificando o tipo do jogo
//EMBAIXO VERIFICO CADA ETAPA DO JOGO USANDO O SWITCH
    if (etapaDoJogo === "semifinais") { //chave se
        switch (categoria) { //chave caso
            case '1':
                ingresso = 1320 / 4.10;
                valorTotal = quantidaIngresso * ingresso;
                console.log(quantidaIngresso);
                
                break
             case '2':
                ingresso = 880 / 4.10;
                valorTotal = quantidaIngresso * ingresso;
                console.log(quantidaIngresso);
                break;
            case '3':
                ingresso = 550 / 4.10;
                valorTotal = quantidaIngresso * ingresso;
                console.log(quantidaIngresso);
                break;
            case '4':
                ingresso = 220 / 4.10;
                valorTotal = quantidaIngresso * ingresso;
                console.log(quantidaIngresso);
            default:
                break;
        } //fechamento chave caso
    
} // fechamento chave se

else if (etapaDoJogo === "terceiro lugar") {

    switch (categoria) { //chave caso
        case '1':
            ingresso = 660 / 4.10;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break
         case '2':
            ingresso = 440 / 4.10;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break;
        case '3':
            ingresso = 330 / 4.10;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break;
        case '4':
            ingresso = 170 / 4.10;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
        default:
            break;
    
    } // fechamento chave caso
} // fechamento do senao se

else if (etapaDoJogo === "final") {//abertira chave entao se

    switch (categoria) { //chave caso
        case '1':
            ingresso = 1980 / 4.10;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break
         case '2':
            ingresso = 1320 / 4.10;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break;
        case '3':
            ingresso = 880 / 4.10;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break;
        case '4':
            ingresso = 330 / 4.10;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
        default:
            break;
    
    } //fechamento chave caso
} // fechamento chave senao se


} //fechamento se

if(tipoDoJogo === "nacional"){ //chave se //AQUI VERIFICO NOVAMENTE O TIPO

//EMBAIXO VERIFICO A ETAPA DO JOGO USADO O SWITCH

    if (etapaDoJogo === "semifinais") { //chave se
        switch (categoria) { //chave caso
            case '1':
                ingresso = 1320;
                valorTotal = quantidaIngresso * ingresso;
                console.log(quantidaIngresso);
                
                break
             case '2':
                ingresso = 880;
                valorTotal = quantidaIngresso * ingresso;
                console.log(quantidaIngresso);
                break;
            case '3':
                ingresso = 550;
                valorTotal = quantidaIngresso * ingresso;
                console.log(quantidaIngresso);
                break;
            case '4':
                ingresso = 220;
                valorTotal = quantidaIngresso * ingresso;
                console.log(quantidaIngresso);
            default:
                break;
        } //fechamento chave caso
    
} // fechamento chave se

else if (etapaDoJogo === "terceiro lugar") {

    switch (categoria) { //chave caso
        case '1':
            ingresso = 660;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break
         case '2':
            ingresso = 440;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break;
        case '3':
            ingresso = 330;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break;
        case '4':
            ingresso = 170;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
        default:
            break;
    
    } // fechamento chave caso
} // fechamento do se

else if (etapaDoJogo === "final") {//abertira chave entao se

    switch (categoria) { //chave caso
        case '1':
            ingresso = 1980;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break
         case '2':
            ingresso = 1320;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break;
        case '3':
            ingresso = 880;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
            break;
        case '4':
            ingresso = 330;
            valorTotal = quantidaIngresso * ingresso;
            console.log(quantidaIngresso);
        default:
            break;
    
    } //fechamento chave caso
    } // fechamento senao se
}

alert(`---Dados da compra--- 
nome do cliente: ${nomeCompleto}
tipo do jogo: ${tipoDoJogo}
Etapa do jogo: ${etapaDoJogo}
categoria: ${categoria}
Quantidade de ingressos: ${quantidaIngresso}
---Valores---
valor do ingresso: ${ingresso}
valor total: ${valorTotal}
`)

*/

