import axios from "axios";
import { useEffect, useState } from "react";
import {TelaInicial, ImagemButao, TelaButao, Butao } from "./styled"
import { BASE_URL } from "../../constant/url";
import CardPerfil from "../../components/CardPerfil/CardPerfil.";
import fogoTinder from "./imagem/fogo.jpg"
import x from "./imagem/x.png"
const PaginaIncial = () => {

  const [perfil, setPerfil] = useState({})

  useEffect(() => {
    pegarPerfil();
  }, []);

  const pegarPerfil = () => {
    axios.get(`${BASE_URL}/person`)
      .then((response) => {

        console.log(response.data)
        setPerfil(response.data.profile)

      })
      .catch((error) => {
        console.log(error.response)

      })
  }
  const choosePerson = (choose) => {
    if (choose) {
      const body = {
        id: perfil.id,
        choice: true
      }
      axios.post(`${BASE_URL}/choose-person`, body)
        .then((response) => {
          console.log(response.data)
          pegarPerfil()
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
    else {

      const body = {
        id: perfil.id,
        choice: false
      }
      axios.post(`${BASE_URL}/choose-person`, body)
        .then((response) => {
          console.log(response.data)

          pegarPerfil()
        })
        .catch((error) => {
          console.log(error.response)
        })

    }

  }

  return (

    <div>
      <TelaInicial>
        <CardPerfil
          img={perfil?.photo}
          name={perfil?.name}
          bio={perfil?.bio}
          age={perfil?.age}
          id={perfil?.id}
        />
      </TelaInicial>
      <TelaButao>
        <Butao onClick={() => choosePerson(false)}>  <ImagemButao src={x} alt={"Icone de deslike"}/> </Butao>
        <Butao onClick={() => choosePerson(true)}> <ImagemButao src={fogoTinder} alt={"Icone de curtida"}/> </Butao>
      </TelaButao>
    </div>
  );
};

export default PaginaIncial;
