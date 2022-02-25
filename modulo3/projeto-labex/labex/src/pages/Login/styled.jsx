import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 11rem;
    width: 80%;
    

`

export const StyledInput = styled.input`
/* background: rgba(255, 255, 255, 0.15); */
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 80%;

padding: 1rem;
border: none;
outline: none;
color: #ec79b3;
/* color: #3c354e; */
font-size: 1rem;
font-weight: bold;
&:focus {
  display: inline-block;
  box-shadow: 0 0 0 0.2rem #b9abe0;
  backdrop-filter: blur(12rem);
  border-radius: 2rem;
}
&::placeholder {
  color: #9b76ff99;
  font-weight: 100;
  font-size: 1rem;
}
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
background: linear-gradient(to right, #bd6fb2 5%, #4b057a 79%);
/* background: linear-gradient(to right, #4d374a 5%, #4b057a 79%); */
/* background: #e7d5db; */
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 25%;
height: 3rem;
border: none;
color: #beb5d4;
border-radius: 2rem;
cursor: pointer;
`;

export const Div = styled.div`
    margin-left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 150px;

`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height:50vh;
  width: 30vw;
  /* background: rgba(4, 0, 255, 0.15); */
  /* background: #9b76ff99; */
  background: linear-gradient(to right, #6167d3 0%, #880af0 79%);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  `