import styled from "styled-components";

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const ContainerHome = styled.div`
    text-align: center;
`    
export const H1 = styled.h1`

    color: slategray;;
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