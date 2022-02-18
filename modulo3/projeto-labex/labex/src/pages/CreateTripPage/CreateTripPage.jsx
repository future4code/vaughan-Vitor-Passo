import useForm from "../../hooks/useForm";
import { Select } from "@chakra-ui/react";
const CreateTripPage = () => {
  const { form, onChange, limparCampos } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });

  const criarViagem = event => {
    event.preventDefault();
    console.log(form);
    limparCampos();
  };
  return (
    <div>
      <form onSubmit={criarViagem} id={"tripId"}>
        <input
          name="name"
          type={"text"}
          value={form.name}
          onChange={onChange}
          placeholder={"Nome"}
          pattern={"^.{5 ,}"}
          required
        />

        <Select
          onChange={onChange}
          name="planet"
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
export default CreateTripPage;
