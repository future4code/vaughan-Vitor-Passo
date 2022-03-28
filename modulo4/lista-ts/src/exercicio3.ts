enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type Filme = {
        nome: string,
        anoDeLacamento: string,
        genero: GENERO,
        pontuaccao?: number
}
const dadosFilmes = (nome: string, anoDeLacamento: string, genero: GENERO, pontuacao?: number) : Filme=>{
    const monstrando: Filme = {
        nome: nome,
        anoDeLacamento: anoDeLacamento,
        genero: genero,
        pontuaccao: pontuacao
    }
    
    return monstrando
}
dadosFilmes("Eita", "14", GENERO.ACAO, 15)
console.log(dadosFilmes)