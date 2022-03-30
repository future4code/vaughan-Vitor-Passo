// Como você faria, já com a extensão 
// instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
// usuaria o tsc operador de && com node e o caminho do arquivo transpilado
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
console.table(pokemon1)