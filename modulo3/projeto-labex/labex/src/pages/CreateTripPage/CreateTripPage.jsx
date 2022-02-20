import useForm from "../../hooks/useForm";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "../../constant/Url";
import { useEffect, useState } from "react";

const CreateTripPage = () => {
  const [createViagens, setCreateViagens] = useState([])
  const { form, onChange, limparCampos } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });



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
    <div>
      {/* id={"tripId"} */}
      <form onSubmit={criarViagem}>
        <input
          name="name"
          type={"text"}
          value={form.name}
          onChange={onChange}
          placeholder={"Nome"}
          required

        />
        <Select
          onChange={onChange}
          name="planet"
          value={form.planet}
          placeholder="Planeta"
          required
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
        />
        <input
          name={"description"}
          placeholder="Descrição"
          value={form.description}
          type={"text"}
          onChange={onChange}
          required    
        />
        <input
          name="durationInDays"
          placeholder="Duração"
          type={"number"}
          value={form.durationInDays}
          required
          onChange={onChange}
        />
        <button type="subimit">Entrar</button>
      </form>
    </div>
  );
};
export default CreateTripPage;
