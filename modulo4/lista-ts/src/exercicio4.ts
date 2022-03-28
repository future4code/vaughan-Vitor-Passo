//Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas
// colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e 
//retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 
enum Setores{
    MARKETING = "marketing",
    VENDAS = "VENDAS",
    FINANCEIRO = "FINANCEIRO"
}

type Colaboradores = {    
    nome: string,
    salario: number,
    setor: Setores,
    presencial: boolean
}

const firstColaboradores: Colaboradores = {
    nome: "Marcos",
    salario: 2500,
    setor: Setores.MARKETING,
    presencial: true
}

const secundColaboradores: Colaboradores = {
    nome: "Maria",
    salario: 1500,
    setor: Setores.VENDAS,
    presencial: false
}

type Casao = Colaboradores[]

const sla : Casao = []
    sla.push(firstColaboradores)
    sla.push(secundColaboradores)
console.log(sla)


