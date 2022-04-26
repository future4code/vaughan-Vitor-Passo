import { connection } from "../data/connection"
import { user } from "../types"

async function getEmail(email: string):Promise<user> {
    const result = await connection('usuarios')
    .select("*").where({email})
    return result[0]
}
export default getEmail