
type Transition = {
    balance: number,
    data: string,
    desc: string
}
type Users = {
    name: string,
    birth: string,
    cpf: string,
    balance: number,
    transition: Transition[]
}
export const users: Users[] = [
    {
        name: "Vitor",
        birth: "17/06/2003",
        cpf: "09638112581",
        balance: 15,
        transition: []
    },
    {
        name: "Ellen",
        birth: "15/09/2001",
        cpf: "32165478999",
        balance: 20,
        transition: []
    },
    {
        name: "Iza",
        birth: "21/06/2000",
        cpf: "111222333-81",
        balance: 30,
        transition: []
    },
    {
        name: "Vinicius",
        birth: "21/10/1999",
        cpf: "12345678900",
        balance: 45,
        transition: []
    },
    {
        name: "Paulina",
        birth: "04/03/1996",
        cpf: "33322211166",
        balance: 60,
        transition: []
    },
    {
        name: "Deuzelita",
        birth: "15/09/1964",
        cpf: "10775910805",
        balance: 80,
        transition: []
    }  
        
]