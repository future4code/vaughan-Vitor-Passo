import styled from "styled-components"
export const Cabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid black;
`

    export const Inicial = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid black;
    border-radius: 5px;
`

export const Logo = styled.img`
    width: 50%;

`

export const Butao = styled.button`
    border: none;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
    &:hover{
    -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1, 1.08);
    }
    
`
