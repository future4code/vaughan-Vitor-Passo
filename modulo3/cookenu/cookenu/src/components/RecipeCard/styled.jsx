import styled from 'styled-components'
export const RecipeCardContainer = styled.div`
        display: flex;
         flex-wrap: wrap;
         width: 350px;
         margin: 10px;
         height: 350px;
         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
         padding: 16px;
         margin: 10px;
         cursor: pointer;
         &:hover{
	transition: all 0.5s;
        -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
         }
         `;
         
export const CardImg = styled.img`
        width: 100%;
        `;


