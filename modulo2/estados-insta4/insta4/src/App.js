import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [posts, setPosts] = useState([
    {
      nomeUsuario: "paulina",
      fotoUsuario: " https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150",
    },

    {
      nomeUsuario: "paulina",
      fotoUsuario: " https://picsum.photos/49/50",
      fotoPost: "https://picsum.photos/100/150",
    },

    {
      nomeUsuario: "paulina",
      fotoUsuario: " https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/100/150",
    },
  ]);

  const [nome, setNome] = useState("");
  const [fotoUsuario, setFotoUsuario] = useState("");
  const [fotoPost, setFotoPost] = useState("");

  const onChangeNome = (e) => {
    setNome(e.target.value);
  };
  const onChangeFotoUsuario = (e) => {
    setFotoUsuario(e.target.value);
  };
  const onChangeFotoPost = (e) => {
    setFotoPost(e.target.value);
  };

  const publicar = () => {
    const post = {
      nomeUsuario: nome,
      fotoUsuario: fotoUsuario,
      fotoPost: fotoPost,
    };

    setPosts((posts) => [...posts, post]);
    console.log(posts);
  };

  const returnPost = posts.map((post) => {
    return (
      <>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      </>
    );
  });

  return (
    <MainContainer>
      <input
        name="nomeUsuario"
        value={nome}
        onChange={onChangeNome}
        placeholder="Nome Usuario"
      />
      <input
        name="fotoUsuario"
        value={fotoUsuario}
        onChange={onChangeFotoUsuario}
        placeholder="Link do Perfil"
      />
      <input
        name="fotoPost"
        value={fotoPost}
        onChange={onChangeFotoPost}
        placeholder="Link da foto"
      />
      <button onClick={publicar}>Publicar</button>
      {returnPost}
    </MainContainer>
  );
};

export default App;
