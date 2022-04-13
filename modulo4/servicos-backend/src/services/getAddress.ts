import axios from "axios";
import { BASE_URL } from "../constants/url";
import { Endereco } from "../types/endereco";

export const endereco = async (cep: string):Promise <Endereco | null> => {
    try {
        const result = await axios.get(`${BASE_URL}/${cep}/json`)
        const newEndereco : Endereco = {
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.bairro,
            estado: result.data.uf
        }
        console.log(newEndereco)
        return newEndereco
    } catch (e) {
        console.error("Erro no serviço getAddress", e)
    }
    
}
