import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import useForm from "../../hooks/useForm"
import {createRecipe} from "../../services/recipes"
import { InputContainer, ScreenContainer } from './styled';
const AddRecipeForm = () =>{
   
    const [form, onChange, clear] = useForm({
        title: "",
        description: "", 
        image: ""
    })

    
    const sendRecipe = (event) =>{
    event.preventDefault()
        createRecipe(form, clear)
    }

    return(
        <ScreenContainer>
        <InputContainer>
            <form onSubmit={sendRecipe}>
                <TextField
                name={"title"}
                onChange={onChange}
                value={form.title}
                label={"Título"}
                fullWidth
                required
                type={"text"}
                variant={"outlined"}
                margin={"normal"}
                />
                <TextField
                name={"description"}
                onChange={onChange}
                value={form.description}
                label={"Descrição"}
                fullWidth
                required
                type={"text"}
                variant={"outlined"}
                margin={"normal"}
                />
                <TextField
                name={"image"}
                onChange={onChange}
                value={form.image}
                label={"Imagem"}
                fullWidth
                required
                type={"text"}
                variant={"outlined"}
                margin={"normal"}
                />
                <Button
                color={"primary"}
                type={"submit"}
                fullWidth
                variant={"contained"}
                >Cadastrar</Button>
            </form>
            
        </InputContainer>
        </ScreenContainer>
    )
}

export default AddRecipeForm