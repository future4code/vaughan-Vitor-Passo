import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 5px;
    margin: 5px;
    height: 200px;
    width: 450px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
    padding: 16px;
    margin: 10px;
    background-color: #fffdfd; 
`

export const ViagemContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
`
export const H1 = styled.h1`
    color: slategray;
`
export const ContainerButton = styled.div`
    display: flex;
    gap: 2rem;
`

export const H2 = styled.b`
    color: slategray;
    display: inline-block;
` 


export const Butao = styled.button`
    border-radius: 25px;
    color: white;
    font-size: 16px;
    background-color: slategray;
    border: none;
    width: 125px;
    height: 40px;
    cursor: pointer;
    &:hover{
        background-color: #9cacbd;
    }
`