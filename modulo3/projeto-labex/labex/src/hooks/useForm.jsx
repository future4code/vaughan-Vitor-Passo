import { useState } from "react";

const useForm = (estadoInicial) =>{
    const [form, setForm] = useState(estadoInicial)

    const onChange = (event) =>{
        const {name, value} = event.target;
        setForm({...form, [name]: value})
    }
    return {form, onChange}
}

export default useForm