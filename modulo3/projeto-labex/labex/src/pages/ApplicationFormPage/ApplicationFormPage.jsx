import { Tela, Botoes } from './styled'
import { useNavigate } from 'react-router-dom'
import {  useState} from "react"
// import {  useState, useMemo } from "react"
import { FormControl, Select } from '@chakra-ui/react'
import axios from 'axios';
import { BASE_URL } from "../../constant/Url"
import { useEffect } from 'react';
import useForm from "../../hooks/useForm"
import Country from '../../constant/Country';
const ApplicationFormPage = () =>{
    const navegando = useNavigate();
    const [viagens, setViagens] = useState([]);
    const {form, onChange, limparCampos} = useForm({
        name: "",
        age: "",
        applicationText: "", 
        profession: "",
        country: ""

    })
    
    const voltar = () =>{
        navegando(-1)
    }

    const getTrips = () =>{
        axios.get(`${BASE_URL}/trips`)
        .then((response)=> {
            console.log(response.data)
            setViagens(response.data.trips)
        })
        .catch((error)=> alert("error"))
    }
    useEffect(()=>{
        getTrips()
    }, [setViagens]);
    
    
    const InscreverViagem = (event) =>{
        event.preventDefault()
        console.log(form)
        limparCampos()
    }


    return(
        // <form onSubmit={InscreverViagem}>
        <form onSubmit={InscreverViagem}>
            <h1>Aqui é o formulário de inscrever a viagem</h1>
            
            <Tela>
            <FormControl>
            <Select placeholder="planetas" style={{width: "177px"}}>
                {viagens.map((viagem)=>
                   <option key={viagem.id} value={viagem.id}>{viagem.name}</option>    
                )}
                
                </Select>
             </FormControl>
            <input 
            name='name'
            placeholder={"nome"}
            type={"text"}
            value={form.name}
            required

            onChange={onChange}
            />

             <input 
             name='age'
            placeholder={"idade"}
            type={"number"}
            required
            value={form.age}
            onChange={onChange}
            />

             <input 
             name='applicationText'
            placeholder={"texto de candidatura"}
            type={"text"}
            required
            value={form.applicationText}
            onChange={onChange}
            />

            <input 
            name='profession'
            placeholder={"profissão"}
            type={"text"}
            required
            value={form.profession}
            onChange={onChange}
            />
            
            <Country
            name={"country"}
             value={form.country}
            onChange={onChange}
            required
        />
           
            </Tela>

            <Botoes>
            <button >cadastrar</button>
            <button onClick={voltar}>voltar</button>
            </Botoes>   
        </form>
    )
}
export default ApplicationFormPage