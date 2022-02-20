import useForm from "../../hooks/useForm";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "../../constant/Url";
import { useState } from "react";
import {Tela, Butao, H1, ContainerButton} from "./styled"
import { useNavigate } from "react-router-dom";
const CreateTripPage = () => {
  const [createViagens, setCreateViagens] = useState([])
  const { form, onChange, limparCampos } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });

  const navegando = useNavigate()
  const voltar = () =>{
       
    navegando(-1)
}

  const criarViagem = (event) => {
    event.preventDefault();
    limparCampos();
    console.log(form);
    createTrip()
  };

  const token = window.localStorage.getItem("token");
  const axiosConfig = {
    headers: {auth: token}
}
  
  const createTrip = () =>{
    axios.post(`${BASE_URL}/trips`, form, axiosConfig)
    .then((response)=>{
      console.log(response.data)
      setCreateViagens(response.data.trips)
      alert("Sucesso ao Criar Viagem")
    })
    .catch((error)=>{
      console.log(error.response)
      alert("Erro ao Criar Viagem")
      console.log(createViagens)
    })
  }

  return (
   
      <>
      {/* id={"tripId"} */}
      <form onSubmit={criarViagem}>
      <Tela>
      <H1>Criar viagem</H1>
        <input
          name="name"
          type={"text"}
          value={form.name}
          onChange={onChange}
          placeholder={"Nome"}
          pattern={"^.{5,}"}
          title={"É necessário no mínimo 5 letras"}
          required
          style={{  
            width: "25%",
           padding: "12px 20px",
           margin: "8px 0",
           borderRadius: "5px"
       }}
        />
        <Select
          onChange={onChange}
          name="planet"
          value={form.planet}
          placeholder="Planeta"
          
          required
          style={{
            width: "380px",
            padding: "12px 20px",
            marginLeft: "480px",
            borderRadius: "5px"
        }}
        >
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
        </Select>
        <input
          name={"date"}
          type={"date"}
          value={form.date}
          onChange={onChange}
          required
          style={{  
            width: "25%",
           padding: "12px 20px",
           margin: "8px 0",
           borderRadius: "5px"
       }}
        />
        <input
          name={"description"}
          placeholder="Descrição"
          value={form.description}
          type={"text"}
          onChange={onChange}
          pattern={"^.{30,}"}
          title={"É necessário no mínimo 30 caracteres"}
          required  
          style={{  
            width: "25%",
           padding: "12px 20px",
           margin: "8px 0",
           borderRadius: "5px"
       }}  
        />
        <input
          name="durationInDays"
          placeholder="Duração"
          type={"number"}
          value={form.durationInDays}
          min="50"
          required

          onChange={onChange}
          style={{  
            width: "25%",
           padding: "12px 20px",
           margin: "8px 0",
           borderRadius: "5px"
       }}
        />
        <ContainerButton>
         <Butao type="subimit">Entrar</Butao>
         <Butao onClick={voltar}>Voltar</Butao>
         </ContainerButton>
        </Tela>
       
      </form>
    
    </>
  );
};
export default CreateTripPage;
