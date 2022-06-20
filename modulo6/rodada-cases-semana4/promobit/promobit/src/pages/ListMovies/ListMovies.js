import { useState } from "react"
import { Headers } from "../../components/Headers/Headers"
import { MoviesContainer } from "../../components/Headers/styled"
import { apiKey, BASE_URL } from "../../constants/url"
import useRequestData from "../../hooks/useRequestData"

export const ListMovies = () => {
    const movies = useRequestData([], `${BASE_URL}/movie/popular?${apiKey}`)
    console.log(movies?.results)
    const [input, setInput] = useState("")
    
    const newMovies = movies?.results?.map((movies)=>{
        const image = `https://www.themoviedb.org/t/p/original${movies.backdrop_path}`
        console.log("Aqui", image)
        return(   
            <>
                <img src={image}/>
                <h3>{movies.title}</h3>
            </>
        ) 
    })
    return (
        <>
        <header>
            <Headers/>
        </header>
        <div>
            <h2>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
            </h2>
        </div>
        <MoviesContainer>
            {/* <li>
            </li> */}
            {newMovies}
        </MoviesContainer>
        <footer>
            <p>Paginaçao</p>
        </footer>
        </>
    )
} 