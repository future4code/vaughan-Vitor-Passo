import { connection } from "../data/connection"
import { user } from "../types"
class GetEmail {
    async getEmail(email: string):Promise<user> {
        const result = await connection('usuarios')
        .select("*").where({email})
        return result[0]
    }
}
export default GetEmail