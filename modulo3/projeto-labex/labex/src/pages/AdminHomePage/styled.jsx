import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    height: 80px;
    width: 450px;
    cursor: pointer;
    &:hover{
        background-color: grey;
    }
`