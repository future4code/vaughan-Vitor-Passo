const dados = () =>{
    const nome: string = process.argv[2]
    const data: string = process.argv[3]
    let mensagem: string[] = data.split("/", 3)
    const message: string = `Olá me chamo ${nome}, nasci no dia ${mensagem[0]} do mês ${mensagem[1]} do ano de ${mensagem[2]}`
    console.log(message)
}
dados()