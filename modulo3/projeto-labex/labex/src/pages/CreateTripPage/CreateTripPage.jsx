import useForm from "../../hooks/useForm"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const CreateTripPage = () =>{
    const options = [
        'Mercúrio', 'Vênus', 'Terra',
         "Marte", "Júpiter", "Saturno",
         "Urano", "Netuno"
      ];
    const defaultOption = options[0];
    const {form, onChange} = useForm({
        name: "",
        planet: defaultOption,
        date: "", 
        description: "", 
        durationInDays: ""
    })
   
       

    const criarViagem = (event) =>{
        event.preventDefault();
        console.log(form)
    }
    return (
        <div>
            <form onSubmit={criarViagem} id={"tripId"}>
                <input
                 type={"text"}
                 value={form.name}
                 placeholder={"Nome"}
                 pattern={"^.{5 ,}"}
                 required
                />
                <Dropdown options={options} 
                onChange={onChange} value={form.planet} 
                placeholder="Selecione o Planeta" 
                required
                />;

                {/* <input/>
                <input/>
                <input/>
                <input/> */}
            </form>
        </div>
    )
}
export default CreateTripPage
