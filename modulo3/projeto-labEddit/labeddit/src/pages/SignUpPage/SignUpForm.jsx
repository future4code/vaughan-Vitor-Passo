import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/user" 
const SingUpForm = () =>{
    const [form, onChange, clear] = useForm({
        username: "", email: "", password: ""
    })
    const navigate = useNavigate()
    const onSubmitSingUp = (event) =>{
        event.preventDefault()
        console.log(form)
        signUp(form, clear, navigate)
    }
    return (
        <form onSubmit={onSubmitSingUp}>
            <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            type={"text"}
            margin={"normal"}
            fullWidth
            required
            />
            <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"Email"}
            type={"email"}
            variant={"outlined"}
            margin={"normal"}
            required
            fullWidth
            />
            <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            type={"password"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
            />
            <Button
            
            type={"submit"}
            variant={"outlined"}
            color={"primary"}
            margin={"normal"}
            fullWidth
            >
            Cadastrar
            </Button>
        </form>
    )
}
export default SingUpForm