import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom"
import { goToSignUp} from "../../Router/coordinates" 
const LoginForm = () => {
    const [form, onChange, clear] = useForm({
        email: "", password: ""
    })
    const navigate = useNavigate()
    const onSubimitLogin = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
    }
    return (
        <>
            <form onSubmit={onSubimitLogin}>
                <TextField
                    name={"email"}
                    label={"Email"}
                    value={form.email}
                    onChange={onChange}
                    variant={"outlined"}
                    fullWidth
                    required
                    margin={"normal"}
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    label={"Senha"}
                    value={form.password}
                    type={"password"}
                    variant={"outlined"}
                    onChange={onChange}
                    fullWidth
                    margin={"normal"}
                    required

                />
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                >Login
                </Button>
                
            </form>
            <Button
            onClick={() => goToSignUp(navigate)}
            type="submit"
            fullWidth
        >Não possui conta? Cadastre-se
        </Button>
        </>
    )
}
export default LoginForm