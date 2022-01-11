import React from 'react';
import styled from 'styled-components';

const NewDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`

const H4 = styled.h4 `
    margin-bottom: 10px ;
`

const DivInfoPessoa = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`

function CardGrande(props) {
    return (
        <NewDiv>
            <Imagem src={ props.imagem } />
            <DivInfoPessoa>
                <H4>{ props.nome }</H4>
                <p>{ props.descricao }</p>
            </DivInfoPessoa>
        </NewDiv>
    )
}

export default CardGrande;