export const goToLogin = (navegando) =>{
    navegando("/login")
}

export const goToSignUp = (navegando) =>{
    navegando("/cadastro")
}

export const goToAddRecipes = (navegando) =>{
    navegando("/adicionar-receita")
}

export const goToRecipeDatail = (navegando, id) =>{
    navegando(`/detalhe/${id}`)
}   

export const goToRecipesList = (navegando) =>{
    navegando("/")
}
