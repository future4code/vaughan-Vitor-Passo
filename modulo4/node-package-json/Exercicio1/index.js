//1- a) Para acessar as informações passadas por paramentros na linha de 
// comandos process.argv e por meio do console.log para a visualização desse dado

//)
const nome = process.argv[2]
const idade = Number(process.argv[3])
if (nome && idade) {
    let novaIdade = idade + 7
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}"`)
}
else {
    console.log("Esperava 2 parâmetros só recebi um.")
}
