import { useState } from "react";

const useForm = (estadoInicial) =>{
    const [form, setForm] = useState(estadoInicial)

    const onChange = (event) =>{
        const {name, value} = event.target;
        setForm({...form, [name]: value})
        
    }
    const limparCampos = () =>{
        setForm(estadoInicial)
    }
    return {form, onChange, limparCampos}
}

export default useForm