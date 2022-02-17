import { Tela, Botoes } from './styled'
import { useNavigate } from 'react-router-dom'
import {  useState, useMemo } from "react"
import countryList from 'react-select-country-list';
import Select from "react-select"
// import axios from 'axios';
// import { BASE_URL } from "../../constant/Url"
// import { useEffect } from 'react';

const ApplicationFormPage = () =>{
    const navegando = useNavigate();
    
    const voltar = () =>{
        navegando(-1)
    }

    // useEffect(()=>{
    //     aplicarViagem()
    // });
    
    const [value, setValue] = useState("")
    const options = useMemo(()=> countryList().getData(), [])   

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [candidatura, setCandidatira] = useState("")
    const [profissao, setProfissao] = useState("")
   
    const inputNome = (event) =>{
        setNome(event.target.value)
        
    }
    const inputIdade = (event) =>{
        setIdade(event.target.value)
    }
    const inputCandidatira = (event) =>{
        setCandidatira(event.target.value)
    }
    const inputProfissao = (event) =>{
        setProfissao(event.target.value)
    }

    const changeHandler = value =>{
        setValue(value)
    }

    // const aplicarViagem = () =>{
    //     const body = {
    //         name: nome,
    //         age: idade,
    //         applicationText: candidatura,
    //         profession: profissao,
    //         country: value
            
    //     }
    //     const axiosConfig = {
    //         headers: {
    //             id: "NoIFVcOiSgTKTIPVZwXS"

    //         }
    //     }
      
    //     axios.post(`${BASE_URL}/id/apply
    //     `, body, axiosConfig)
    //     .then((response)=>{
    //         console.log("Deu Certo: ", response.data)
    //     })
    //     .catch((error)=>{
    //         console.log(error.response)
    //     })
    // }

    return(
        <div>
            <h1>Aqui é o formulário de inscrever a viagem</h1>
            <Tela>
            <input 
            placeholder={"nome"}
            type={"text"}
            value={nome}
            onChange={inputNome}
            />

             <input 
            placeholder={"idade"}
            type={"number"}
            value={idade}
            onChange={inputIdade}
            />

             <input 
            placeholder={"texto de candidatura"}
            type={"text"}
            value={candidatura}
            onChange={inputCandidatira}
            />

            <input 
            placeholder={"profissão"}
            type={"text"}
            value={profissao}
            onChange={inputProfissao}
            />

            <Select options={options} value={value} onChange={changeHandler}/>
            </Tela>

            <Botoes>
            <button >cadastrar</button>
            <button onClick={voltar}>voltar</button>
            </Botoes>   
        </div>
    )
}
export default ApplicationFormPage