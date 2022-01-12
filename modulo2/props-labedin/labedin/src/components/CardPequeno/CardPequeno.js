import React from "react";
import styled from "styled-components";

const Borda = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 500px;
    padding: 15px 30px;
    margin: 10px auto;

`
const Imagem = styled.img `
    width: 35px;
    margin-right: 10px;
    border-radius: 50%;

`


const CardPequeno = (props)  =>{
    return (
        <Borda>
        <Imagem src={props.imagem} />
        <p>{props.texto} </p>
        </Borda>
    )
}

export default CardPequeno;