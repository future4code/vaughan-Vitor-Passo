//2)
//a) As entradas são uma lista de números e a saída a estatística 
//b) maior, menor e media todas do tipo number
type Estatisticas ={
    maior: number,
    menor: number,  
    media: number   
}

function obterEstatisticas(numeros: number[]):Estatisticas{

    const numerosOrdenados: number[] = numeros.sort(
        (a:number, b:number) => a - b
    )
        
    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
type Dados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[])=>{
    }
}
const dadosEstatisticos : Dados = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros: number[]) : {}=>{
        return obterEstatisticas(numeros)
    }
}
console.log(obterEstatisticas(dadosEstatisticos.numeros))

