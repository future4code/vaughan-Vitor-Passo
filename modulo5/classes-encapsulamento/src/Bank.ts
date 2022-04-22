import { UserAccount } from ".";

export class Bank{
    private accounts: UserAccount[]
    public getAccounts(){
        return this.accounts
    }
    public setAccouts(newAccounts: UserAccount[]){
        return this.accounts = newAccounts
    }
    constructor(accounts: UserAccount[]){
        this.accounts = accounts
    }
}