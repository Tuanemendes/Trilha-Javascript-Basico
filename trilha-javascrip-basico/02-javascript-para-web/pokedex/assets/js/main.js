
function convertPokemonToLi(pokemon) {

    return ` 
        <li class="pokemon" ${pokemon.type}>
            <span class="number">#${pokemon.numberPokemon}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')} 
                </ol>
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </li>`
}

const pokemonList = document.getElementById('pokemon-list');


pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml;

    /*  
     outra forma sem fatoração
     const newList =  pokemons.map((pokemon) => {
         return convertPokemonToLi(pokemon)
     })
     const newhtml = newList.join('') // as aspas simples é para retirar as vigulas do join 
     pokemonList.innerHTML += newhtml */


    /*   
    forma mais complexa 
    const listItens = []
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]
            listItens.push(convertPokemonToLi(pokemon))
            
        }
       console.log(listItens) */
})



