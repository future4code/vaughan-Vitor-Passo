import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import Typography from "@mui/material/Typography";
import { ScreenContainer, RecipeImage, RecipeContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
const RecipeDatailPage = () => {
  useProtectedPage();
  const params = useParams();
  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0];
  return (
    <ScreenContainer>
      {(recipe
        ? 
        <RecipeContainer>
            <RecipeImage src={recipe.image} />
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              color={"primary"}
            >
              {recipe && recipe.title}
            </Typography>
            <Typography align="center">
              {recipe.description}
            </Typography>
          </RecipeContainer>
        : 
          <Loading />
      )}
    </ScreenContainer>
  );
};
export default RecipeDatailPage;
