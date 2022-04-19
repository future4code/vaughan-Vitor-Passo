//1 Exercicio
//A) Para você usar os atributos da classe é necessária instanciar 
//o objeto da classe para isso é necessário usar o construtor para acessar
//os atributos e métodos.

//B)
type Transaction = [
    {}
]
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
    
    constructor(cpf: string,name: string,age: number) {
            console.log("Chamando o construtor da classe UserAccount")
            this.cpf = cpf;
            this.name = name;
            this.age = age;
        }
        
        public getName(){
            return this.name
        }
        public setName(newName: string){
            return this.name = newName
        }
        public getCpf(){
            return this.cpf
        }
        public setcpf(newCpf: string){
            return this.cpf = newCpf
        }
        public getage(){
            return this.age
        }
        public setAge(newAge: number){
            return this.age = newAge
        }
        
        
    }