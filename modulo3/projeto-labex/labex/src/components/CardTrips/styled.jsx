import styled from "styled-components"
export const CardTripsContainer = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    margin: 30px;

` 

export const ContainerButton = styled.div`
    display: flex;
    gap: 2rem;
    margin: 35px;

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

