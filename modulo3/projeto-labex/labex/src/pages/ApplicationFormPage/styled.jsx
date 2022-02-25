import styled from "styled-components"
export const Tela = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
`

export const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    margin: 16px;
    
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

export const H1 = styled.h1`
    color: slategray;
`
export const Input = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 16px; */
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`

