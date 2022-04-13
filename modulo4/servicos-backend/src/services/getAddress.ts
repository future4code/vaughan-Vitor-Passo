import axios from "axios";
import { BASE_URL } from "../constants/url";
import { Endereco } from "../types/endereco";
const URL = 'https://viacep.com.br/ws'
export const endereco = async (CEP: string):Promise <Endereco | null> => {
    try {
        const result = await axios.get(`${URL}/${CEP}/json`)
        const {logradouro, bairro, localidade, uf} = result.data
        const newEndereco : Endereco = {
            logradouro,
            bairro,
            localidade,
            uf
        }
        console.log(result)
        return newEndereco
    } catch (e) {
        console.error("Erro no serviço getAddress", e)
    }

}
