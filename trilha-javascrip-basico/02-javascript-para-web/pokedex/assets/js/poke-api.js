
const pokeApi = {}

function convertPokeApiDetalhePokemon(pokemonDetalhe){
    const pokemon = new Pokemon()
    pokemon.numberPokemon = pokemonDetalhe.id
    pokemon.name = pokemonDetalhe.name
    const types = pokemonDetalhe.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokemonDetalhe.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetalhes = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json()) 
    .then(convertPokeApiDetalhePokemon)
    
    
    //retorna um response e converte em json a lista de detalhes 
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())  
        .then((jsonBody) => jsonBody.results) 
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetalhes)) 
        .then((detalhesRequests) => Promise.all(detalhesRequests)) 
        .then((pokemonsDetalhes) => pokemonsDetalhes)
    //.catch((error) => console.log(error));
}


/* 1 ) converte o http response em json
// lista de resultados dos pokemon
//  lista de busca do detalhe dos pokemons  
// Promisse quando termina devolve a lista de detalhes
*/

/* Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1/'),
    fetch('https://pokeapi.co/api/v2/pokemon/2/')
]).then((results) =>{
    console.log(results)
}) */