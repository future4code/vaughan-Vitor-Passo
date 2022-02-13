import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  width: 340px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 12%;
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 4px;
    border: solid 1px black;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
  }
  div {
    height: 25%;
    position: absolute;
    bottom: -2px;
    width: 91%;
    background-image: linear-gradient(to right top, rgba(0, 0, 0, 1), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 2;
    padding: 15px; 
    border-radius: 8px;
  }
  
  h1, h2, h3, h4, h5, h6 {
    position: relative;
    top: 25px;
  }
  p {
      font-size: 16px;
      position: relative;
    top: 15px;
  }
`