// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = array.length;
   return tamanhoArray;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayInvertido = array.reverse();
  return arrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
const reodernando = array.sort((a, b) => a - b);
return reodernando;
      
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                novoArray.push(array[i]);
            }
        
    }
    return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                array[i] =  Math.pow(array[i], 2);
                newArray.push(array[i]);
            }
        
    }
    return newArray;
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > maior){
            maior = array[i];
        }

    }
    return maior;
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2);
    let menorNumero = Math.min(num1, num2);
    let diferenca = maiorNumero - menorNumero;
    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
    return {maiorNumero, maiorDivisivelPorMenor, diferenca}

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

     let novoArray = [];
    for (let i = 0; novoArray.length < n; i++) {
            if (i % 2 === 0) {
                novoArray.push(i)
            }
        
    }
    return novoArray;

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoC === ladoA) {
        return "Equilátero"
    }


    // else if(ladoA === ladoB || ladoB === ladoA && ladoA !== ladoC || ladoA === ladoC || ladoC == ladoA &&  ladoA !== ladoB) {
    //    return "Isósceles"
    // } 
    else if (ladoA === ladoB && ladoA !== ladoC || ladoA === ladoC && ladoC !== ladoB || ladoB === ladoC && ladoB !== ladoA) {
        return "Isósceles"
    }

    else if (ladoA !== ladoB && ladoB !== ladoC) {
        return "Escaleno"
        
    }
   
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
     }
     const mensagem = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
   return mensagem
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novoNome = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novoNome
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}