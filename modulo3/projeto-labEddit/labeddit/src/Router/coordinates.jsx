export const goToLogin = (navigate) =>{
    navigate("login")
}

export const goToSignUp = (navigate) =>{
    navigate("/cadastro")
}

export const goToPostDatail = (navigate, id) =>{
    navigate(`/detalhes/${id}`)
}

export const goToFeed = (navigate) =>{
    navigate("/")
}
