import axios from "axios";
import { BASE_URL } from "./baseURL";

type Subiscribe = {
    id: string,
    name: string,
    email: string
}

// 1 QUESTÃO

// A) /news
// B) any[]
//c)
async function getAllSubiscribe(): Promise<Subiscribe[]> {
    const result = await axios.get(`${BASE_URL}/subiscribe`)
    .then(res => res.data)
    return result.data
}

//2) A) idk
//B)
/*
const AllSubiscribe = async (): Promise <any[]> => {
    const result = await axios.get(`${BASE_URL}/subiscribe`)
    .then(res => res.data)
    return result.data
}
*/
//3) a) Nao da erro b) Não é uma boa prática

//4)
const news = {
    title: "Homem raivoso morde cachorro tranquilo",
    content: "Homem raivoso morde cachorro tranquilo",
    date: Date.now()
}


const createNews = async (news: any): Promise<any> => {
    return axios.put(`${BASE_URL}/news`, news)
}

const main = async (): Promise <any> => {
    try {
        const response = await createNews(news)
        console.log(response)

        await getAllSubiscribe()
    } catch (e: any) {
        console.log(e.response?.data || e.message)
    }
}

main()