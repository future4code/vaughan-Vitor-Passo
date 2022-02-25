import { Tela, Botoes, H1, Butao } from './styled'
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
    const [idViagem, setIdViagem] = useState("")
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
        
            setViagens(response.data.trips)
        
        })
        .catch((error)=> alert("error"))
    }
    useEffect(()=>{
        getTrips()
    }, [setViagens]);
    
    const aplyToTrip = (event) =>{
        event.preventDefault()
        axios.post(`${BASE_URL}/trips/${idViagem}/apply`, form)
        .then((reponse)=>{
            alert("Inscrição enviada com sucesso")
            limparCampos()
        })   
        
        .catch((error)=>{
       
         alert("Erro ao enviar")})
    }

    const pegandoId = (event) =>{
        setIdViagem(event.target.value)
    }

    return(
       
        // <form onSubmit={InscreverViagem}>
        <>
        <form onSubmit={aplyToTrip}>
               
            <Tela>
            <H1>Aqui é o formulário de inscrever a viagem</H1>
            <FormControl>
            <Select placeholder="planetas" onChange={pegandoId} 
                style={{
                    width: "380px",
                    padding: "12px 20px",
                    margin: "8px 0",
                    borderRadius: "5px"
                }} >
                {viagens.map((viagem)=>
                   <option key={viagem.id}  value={viagem.id}>{viagem.name}</option>  
               
               )}
                
                </Select>
             </FormControl>
            <input
             style={{  
                 width: "25%",
                padding: "12px 20px",
                margin: "8px 0",
                borderRadius: "5px"
            }}
            name='name'
            placeholder={"nome"}
            type={"text"}
            value={form.name}
            pattern={"^.{3,}"}
            title={"É necessário no mínimo 3 letras"}
            required

            onChange={onChange}
            />

             <input 
             name='age'
             style={{  
                width: "25%",
               padding: "12px 20px",
               margin: "8px 0",
               borderRadius: "5px"
           }}
            placeholder={"idade"}
            type={"number"}
            value={form.age}
            onChange={onChange}
            
            min="18"
            
            required
            />

             <input 
              style={{  
                width: "25%",
               padding: "12px 20px",
               margin: "8px 0",
               borderRadius: "5px"
           }}
             name='applicationText'
            placeholder={"texto de candidatura"}
            type={"text"}
            pattern={"^.{30,}"}
            title={"É necessário no mínimo 30 caracteres"}
            required
            value={form.applicationText}
            onChange={onChange}
            />

            <input 
             style={{  
                width: "25%",
               padding: "12px 20px",
               margin: "8px 0",
               borderRadius: "5px"
           }}
            name='profession'
            placeholder={"profissão"}
            type={"text"}
            pattern={"^.{10,}"}
            required
            title={"É necessário no mínimo 10 caracteres"}
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
            <Butao>Enviar</Butao>
            <Butao onClick={voltar}>voltar</Butao>
            </Botoes>   
        </form>
        
        </>
    )
}
export default ApplicationFormPage