// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui

  altura = Number(prompt())
  largura = Number(prompt())
  const area = altura * largura;
  console.log(area)


}



// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt())
  anoNascimento = Number(prompt())
  const idade = anoAtual - anoNascimento
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  peso = Number(prompt("Digite seu peso"))
  altura = Number(prompt("Digite sua Altura"))
  const imc = peso / (altura * altura)
  console.log(imc.toFixed(2))
  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite seu nome");
  idade = prompt("Digite sua idade");
  email = prompt("Digite seu email");
  const impressaoDadosUsuarios = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`;
  console.log(impressaoDadosUsuarios)
  return impressaoDadosUsuarios;
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt("Digite sua cor favorita")
  cor2 = prompt("Digite outra cor favorita")
  cor3 = prompt("Digite outra cor favorita")
  const coresFavoristas = [cor1, cor2, cor3];
  console.log(coresFavoristas);
  return coresFavoristas;

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const maiuscula = string.toUpperCase();
  console.log(maiuscula);
  return maiuscula;

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIngereso = custo / valorIngresso;
  console.log(quantidadeIngereso);
  return quantidadeIngereso;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 return string1 >= string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const firstElement = array[0]
  console.log(firstElement);
  return firstElement;

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  const ultimo = array.pop()
  console.log(ultimo)
  return ultimo
  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let array1 = array.slice()
array1[array.length -1] = array[0]
array1 [0] = array[array1.length -1]
return array1 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
  const comparacao = string1 >= string2;
  return comparacao

}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoDeNascimento, anoEmissaoCarteira) {
  // implemente sua lógica aqui
  anoAtual = prompt("Digite o ano atual");
  anoDeNascimento = prompt("Digite o ano de nascimento")
  anoEmissaoCarteira = prompt("Digite o ano da sua emissao de carteira")
  const idade = anoAtual - anoDeNascimento;
  const validade = anoAtual - anoEmissaoCarteira;
  if (idade <= 20 && validade >= 5) {
      console.log(true) 
  }
  else if (idade > 21 && idade <= 50 && validade >= 10 ) {
    console.log(true)
  }
  else if(idade > 50 && validade > 15){
    console.log(true)
  }
  else{
    console.log(false)
  }
  
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
   
  
  if (ano % 400 === 0) {
    console.log(true)
  }  
  else if(ano % 4 === 0 && ano % 100 !==0){
  console.log(true)

}
else{
    console.log(false)
  }
  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade, ensinoMedio, cargaHoraria) {
  // implemente sua lógica aqui
  idade = prompt("Você tem mais de 18 anos");
  ensinoMedio = prompt("Você já terminou o ensino médio");
  cargaHoraria = prompt("Você tem disponibilidade de horário das 8 às 17")
  const confirmação = idade == "sim" && ensinoMedio == "sim" && cargaHoraria == "sim"
  console.log(confirmação)

}
