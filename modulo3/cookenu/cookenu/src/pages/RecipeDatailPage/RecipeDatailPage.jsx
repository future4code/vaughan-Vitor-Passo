import React from "react"
 import useProtectedPage from "../../hooks/useProtectedPage"
const RecipeDatailPage = () =>{
    useProtectedPage()
    return(
        <div>
            <h1>RecipeDatailPage</h1>
        </div>
    )
}
export default RecipeDatailPage