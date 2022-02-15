import styled from "styled-components"
export const TelaInicial = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TelaButao = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    bottom: 30px;

    
`

export const Butao = styled.button`
    border-radius: 50%;
    border: none;
    background-color: white;
`

export const ImagemButao = styled.img`
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
    &:hover{
    -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
    }
`