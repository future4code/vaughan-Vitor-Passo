export class Transaction {
    private description: string
    private value: number
    private date: string

    public getDescription():string{
        return this.description
    }
    public setDescription(newDescription: string){
        this.description = newDescription
    }
    public getValue():number{
        return this.value
    }
    public setValue(newValue: number){
        return this.value = newValue
    }
    public getDate():string{
        return this.date
    }
    public setDate(newDate: string){
        return this.date = newDate
    }
    constructor(description:string, value:number, date:string){
        this.description = description
        this.value = value
        this.date = date
    }
}   