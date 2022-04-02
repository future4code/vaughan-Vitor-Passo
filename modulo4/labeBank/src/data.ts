
type Transition = {
    transitionInAccount: any[]
}
type Users = {
    nome: string,
    birth: string,
    cpf: string,
    balance: number,
    transition: Transition[]
}
export const users: Users[] = [
    {
        nome: "Vitor",
        birth: "17/06/2003",
        cpf: "09638112581",
        balance: 15,
        transition: []
    },
    {
        nome: "Ellen",
        birth: "15/09/2001",
        cpf: "32165478999",
        balance: 20,
        transition: []
    },
    {
        nome: "Iza",
        birth: "21/06/2000",
        cpf: "111222333-81",
        balance: 30,
        transition: []
    },
    {
        nome: "Vinicius",
        birth: "21/10/1999",
        cpf: "12345678900",
        balance: 45,
        transition: []
    },
    {
        nome: "Paulina",
        birth: "04/03/1996",
        cpf: "33322211166",
        balance: 60,
        transition: []
    },
    {
        nome: "Deuzelita",
        birth: "15/09/1964",
        cpf: "10775910805",
        balance: 80,
        transition: []
    }  
    
]