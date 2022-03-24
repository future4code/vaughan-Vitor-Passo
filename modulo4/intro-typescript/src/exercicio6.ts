const tabuada = (num1: number, num2: number): void=>{
    const soma = num1 + num2
    const multiplicacao = num1 * num2
    const subtracao = num1 - num2
    const divisao = num1 / num2
    let maiorNumero: number;
    console.log(`A soma: ${soma}, a subtração: ${subtracao}, a multiplicação: ${multiplicacao}, e a divisão: ${divisao}`)
    
    if(num1 > num2){
        maiorNumero = num1
        console.log(maiorNumero)
    }
    else if(num1 === num2){
        console.log("Os números são iguais")
    } 
    else{
        maiorNumero = num2
        console.log(maiorNumero)
    }
    
}
console.log(tabuada(3, 6))