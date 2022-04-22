import { UserAccount } from ".";
import { Transaction } from "./Transaction";

const user: UserAccount = new UserAccount("09638112581", "vitor", 18)
console.log(user)

const transactions: Transaction = new Transaction("Pix do perfume", 150, "17/06/2003")
console.log(transactions)