
import axios from "axios";
import React, { useState, useEffect } from 'react';
 const PokeCard = (props) =>{

    const [pokemon, setPokemon] = useState({})

  // método que roda após a montagem do componente
  useEffect(()=>{
  
    pegaPokemon(props.pokemons)
  }, [pokemon]) 
  
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
       
        setPokemon(response.data)
        console.log(pokemon)
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  pegaPokemon(pokemon)

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}
export default PokeCard;
 